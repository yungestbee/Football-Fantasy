const http = require("http-status-codes");
const player = require("../models/playerSchema");
const updatePlayerJoi = require("../validators/updatePlayerJoi")


const updatePlayer = async (req, res, next) =>{
        const {error, value} = updatePlayerJoi.validate(req.body)
        if(error) {
            res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
        }
        const check = await player.findOne({_id: req.params._id, team: req.team})
        if(!check) {
            res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
        } else {
            const input = await player.updateById(check._id, {set:{value}})
            res.status(http.StatusCodes.OK).send(input)
        }
    }


    module.exports = updatePlayer