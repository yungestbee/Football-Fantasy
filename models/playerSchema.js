const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    image: String,
    age: Number,
    position: String,
    playerValue: Number,
    teamName: String
})


const player = mongoose.model("player", playerSchema)

module.exports = player

