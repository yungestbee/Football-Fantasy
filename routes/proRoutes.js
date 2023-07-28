const express = require('express')
// const USERS = require('../middlewares/faker')
const createUser = require('../controllers/createUser')
const login = require('../controllers/login')
const verifyToken = require('../middlewares/verifyToken')
const transferList = require('../controllers/transferList')
const createTeam = require('../middlewares/createTeam')
const createRandomPlayersMiddleware = require('../middlewares/faker')
const mailer = require('../middlewares/nodemailer')
const getAllPlayers = require('../controllers/getAllPlayer')
const teamInfo = require('../controllers/teamInfo')
const buyPlayer = require('../controllers/buyPlayer')
const postPlayer = require('../controllers/transfer')
const updateTeam = require('../controllers/updateTeam')
const updatePlayer = require('../controllers/updatePlayer')

const route = express.Router()

route.post("/signUp", createUser, createTeam, createRandomPlayersMiddleware, mailer)

route.get("/login", login)

route.get("/players", verifyToken, getAllPlayers)

route.get("/myTeam", verifyToken, teamInfo)

route.get("/transfer", verifyToken, transferList)

route.post("/transfer", verifyToken, postPlayer)

route.put("/signPlayer", verifyToken, buyPlayer)

route.put("/updateTeam:id", verifyToken, updateTeam)

route.put("/updatePlayer:id", verifyToken, updatePlayer)


module.exports = route