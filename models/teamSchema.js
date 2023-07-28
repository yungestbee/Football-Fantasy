const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    teamName: {
        type: String,
        unique: true,
    },
    country: {
        type: String
    },
    teamValue: {
        type: Number
    },
    additionalValue: {
        type: Number
    },
    TotalValue: {
        type: Number
    },
})


const team = mongoose.model("team", teamSchema)

module.exports = team

