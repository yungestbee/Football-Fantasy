const joi = require("joi")

const transferJoi = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    position: joi.string().required(),
    marketValue: joi.number().required(),
})

module.exports = transferJoi
