const bcrypt = require('bcrypt')
const loginJoi = require('../validators/loginJoi')
const user = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const http = require("http-status-codes")

const secretKey = process.env.secretKey

const login = async (req, res)=>{
    const input = loginJoi.validate(req.body)
    if(!input){
        return res.status(http.StatusCodes.BAD_REQUEST).send("invalid details")
    }
    try {
        const logInfo = await user.findOne({username: input.value.username})
        console.log(logInfo)
        if (!logInfo){
            return  res.status(http.StatusCodes.BAD_REQUEST).send("invaid credentials")
        } else {
            console.log(input.value.password, logInfo.password)
            const compare = await bcrypt.compare(input.value.password, logInfo.password)
            if(!compare) {
                return res.status(http.StatusCodes.BAD_REQUEST).send("invalid details")
            } else {
                const token = jwt.sign({username:logInfo.username}, secretKey, {expiresIn: "50m"})
                res.status(200).send(`Welcome Back ${input.value.username} \n ${token}`)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = login