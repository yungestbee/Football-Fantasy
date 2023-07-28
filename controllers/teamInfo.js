const team = require("../models/teamSchema")
const http = require("http-status-codes")

const teamInfo = async (req, res)=>{
    console.log(req.team)
    try {
        const getInfo = await team.find({teamName:req.team})
        console.log(getInfo)
        if(!getInfo) {
            return res.status(http.StatusCodes.BAD_REQUEST).send("error fetching team")
        }else{
            res.status(http.StatusCodes.OK).send(getInfo)
        }
    } catch (error) {
        console.log(error)
        res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = teamInfo
