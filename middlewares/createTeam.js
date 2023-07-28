const team = require("../models/teamSchema")
// const http = require("http-status-codes")
const {faker} = require('@faker-js/faker');

const createTeam = async (req, res, next)=>{
    try {
        let teamValue = 20000000
        let additionalValue = 5000000
        // console.log(req.body.username)
        const teams = await team.create({
            teamName: `${req.body.username} FC`,
            teamValue: teamValue,
            country: faker.location.country(),
            additionalValue: additionalValue,
            TotalValue: teamValue + additionalValue
        }) 
        req.team = `${req.body.username} FC`
        // res.status(http.StatusCodes.CREATED).send("Team successfully Created!!!")
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = createTeam