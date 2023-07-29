const http = require("http-status-codes")
const transfer = require('../models/transferSchema')

const transferList = async (req, res, next)=>{
    try {
        const getList = await transfer.find({})
         if (!getList) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't get transfer list")
         console.log(getList)
        res.status(http.StatusCodes.OK).json(getList)
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
    
}

module.exports=transferList