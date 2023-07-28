const joi = require("joi")

const updateTeamJoi = joi.object({
    teamName: joi.string(),
    country: joi.string()
})

module.exports = updateTeamJoi
