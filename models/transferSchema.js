const mongoose = require('mongoose')

const transferSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    position: String,
    marketValue: Number,
    team: String
})


const transfer = mongoose.model("transfer", transferSchema)

module.exports = transfer