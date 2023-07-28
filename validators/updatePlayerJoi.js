const joi = require("joi")

const updatePlayerJoi = joi.object({
    firstName: joi.string(),
    lastName: joi.string(),
    country: joi.string()
})

module.exports = updatePlayerJoi
