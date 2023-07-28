const jwt = require('jsonwebtoken')
const http = require("http-status-codes")

const secretKey = process.env.secretKey
const verifyToken = (req, res, next)=>{
    const token = req.header("authorization")
    console.log(token)
    if (!token){
        res.status(http.StatusCodes.UNAUTHORIZED).send("not authorized")
    } else{
        try {
            const verify = jwt.verify(token, secretKey, (error, decoded)=>{
                if (error) {
                    console.error('JWT verification failed:', error.message);
                  } else {
                    console.log('Decoded token:', decoded);
                    req.team = `${decoded.username} FC`
                  }
              })
              next()
        } catch (error) {
            res.status(http.StatusCodes.EXPECTATION_FAILED).send("Invalid token")
        }
    }
}

module.exports = verifyToken