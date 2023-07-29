const bcrypt = require('bcrypt')
const loginJoi = require('../validators/loginJoi')
const user = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const http = require("http-status-codes")

const secretKey = process.env.secretKey

//create controller/ function to initialize user's login 
const login = async (req, res)=>{
    // validate user's input using joi
    const {error, value} = loginJoi.validate(req.body)
    if(error){
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
    //fetch user's info from database
    try {
        const logInfo = await user.findOne({username: value.username})
        console.log(logInfo)
        if (!logInfo){
            return  res.status(http.StatusCodes.BAD_REQUEST).send("invalid credentials")
        } else {
            console.log(value.password, logInfo.password)
            const compare = await bcrypt.compare(value.password, logInfo.password)
            if(!compare) {
                return res.status(http.StatusCodes.BAD_REQUEST).send("invalid details")
            } else {
                const token = jwt.sign({username:logInfo.username}, secretKey, {expiresIn: "50m"})
                res.status(200).send(`Welcome Back ${value.username} \n ${token}`)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = login