const http = require("http-status-codes")
const transfer = require('../models/transferSchema')

const transferList = (req, res, next)=>{
    try {
        const getList = transfer.find({})
         if (!getList) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't get transfer list")
        res.status(http.StatusCodes.OK).send(getList)
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't get transfer list")
    }
    
}

module.exports=transferList