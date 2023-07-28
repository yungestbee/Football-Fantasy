const joi = require("joi")

const userJoi = joi.object({
    email: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required()
})

module.exports = userJoi