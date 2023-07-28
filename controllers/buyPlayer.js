const http = require("http-status-codes")
const transfer = require('../models/transferSchema')
const team = require("../models/teamSchema")
const buyPlayerJoi = require('../validators/buyPlayerJoi')

const buyPlayer = async (req, res)=>{
    let playerMarketValue = 0
    let teamAdditionalValue = 0
    const {error, value} = buyPlayerJoi.validate(req.body)
    if(error){
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message);
    } else {
        // console.log(value)
        try {
            const player = await transfer.findOne(value)
            // console.log(player)
            if(!player){
                return res.status(http.StatusCodes.BAD_REQUEST).send("player not found on transfer list")
            } else {
                if(player.team === req.team){
                    return res.status(http.StatusCodes.BAD_REQUEST).send("player is a member of your team")
                } else{
                try {
                    playerMarketValue = player.marketValue
                    const myTeam = await team.findOne({teamName:req.team})
                    console.log(playerMarketValue, myTeam)
                    if(!myTeam){
                        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                    } else {
                        teamAdditionalValue = myTeam.additionalValue
                        if(playerMarketValue <= teamAdditionalValue){
                                try {
                                    const updated = await team.updateOne({teamName:req.team}, {$set: {additionalValue: (teamAdditionalValue - playerMarketValue)}})
                                } catch (error) {
                                    console.log(error)
                                    return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                                }
                                
                                try {
                                    const ExTeam = await team.findOne({teamName:player.team})
                                    if(!ExTeam){
                                         return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                                    } else{
                                        var exTeamAdditionalValue = ExTeam.additionalValue
                                    }
                                    const updateExTeam = await team.updateOne({teamName:player.team}, {$set: {additionalValue: (exTeamAdditionalValue + playerMarketValue)}})
                                } catch(error){
                                    console.log(error)
                                    if(!updatedExTeam) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                                }
                                try {
                                    let x = Math.random() * (1 - 0.10) + 0.10
                                    let updatedPlayerValue = (player.playerValue) * x.toFixed(2)
                                    const updatedPlayer = await player.updateOne({value}, {$set: {team: req.team, playerValue:(player.playerValue) + updatedPlayerValue}})
                                } catch (error) {
                                    console.log(error)
                                    if(!updatedPlayer) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                                }
                        } else {
                            return res.status(http.StatusCodes.BAD_REQUEST).send("Insufficient Fund")
                        }
                    }
                } catch (error) {
                    console.log(error)
                    return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
                }
            }
            }
            res.status(http.StatusCodes.OK).send("Transaction Complete")
        } catch (error) {
            res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
        }
    }
}


module.exports = buyPlayer

