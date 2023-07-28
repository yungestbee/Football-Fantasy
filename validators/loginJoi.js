const joi = require("joi")

const loginJoi = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
})

module.exports = loginJoi