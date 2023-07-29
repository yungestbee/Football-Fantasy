const http = require("http-status-codes");
const player = require('../models/playerSchema')
// const mongoose = require('mongoose')

//create controller/ function to fetch all the user's team players
const getAllPlayers = async (req, res)=>{
    // fetch player data from the database using the team name
    try {
        const getPlayers = await player.find({team:req.team})
        if(!getPlayers) return res.status(http.StatusCodes.BAD_REQUEST).send("couldnt fetch players")
        res.status(http.StatusCodes.OK).send(getPlayers)
    } catch (error) {
        console.log(error.message)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = getAllPlayers