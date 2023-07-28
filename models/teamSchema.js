const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    teamName: String,
    teamValue: Number,
    additionalValue: Number,
    TotalValue: Number
})


const team = mongoose.model("team", teamSchema)

module.exports = team

