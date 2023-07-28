const transferJoi = require('../validators/transferJoi')
const http = require("http-status-codes")
const transfer = require('../models/transferSchema')

const postPlayer = (req, res)=>{
    const {error, value} = transferJoi.validate(req.body)
    if(error) {
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
    try {
        const transferList = transfer.create({
            firstName: value.firstName,
            lastName: value.lastName,
            position: value.position,
            marketValue: value.marketValue,
            team: req.team
        })
        if(!transferList) {
            return res.status(http.StatusCodes.BAD_REQUEST).send(error)
        } else {
            return res.status(http.StatusCodes.OK).send(`${value.firstName} successfully added to transfer list`)
        }
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = postPlayer