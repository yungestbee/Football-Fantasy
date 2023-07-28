const http = require("http-status-codes");
const updateTeamJoi = require("../validators/updateTeamJoi");
const team = require("../models/teamSchema");


const updateTeam = async (req, res, next) =>{
        const {error, value} = updateTeamJoi.validate(req.body)
        if(error) {
            res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
        }
        const check = await team.findOne({_id: req.params.id})
        if(!check) {
            res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
        } else {
            const input = await team.updateById(check._id, {set:{value}})
            res.status(http.StatusCodes.OK).send(input)
        }
    }

    module.exports = updateTeam