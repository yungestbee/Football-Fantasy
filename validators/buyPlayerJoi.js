const joi = require("joi")

const buyPlayerJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required()
})

module.exports = buyPlayerJoi