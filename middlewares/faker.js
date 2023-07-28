const {faker} = require('@faker-js/faker');
const player = require('../models/playerSchema');


const createRandomPlayersMiddleware = async (req, res, next) => {
  const createRandomDefenders =()=> {
    return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    country: faker.location.country(),
    image: ("uploads\player.jpg"),
    age: Math.floor(Math.random() * (40 - 18) + 18),
    position: "defence",
    playerValue: 1000000,
    teamName: req.team
    }
  };

const createRandomMidfielders =()=>{
  return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      country: faker.location.country(),
      image: ("uploads\player.jpg"),
      age: Math.floor(Math.random() * (40 - 18) + 18),
      position: "midfield",
      playerValue: 1000000,
      teamName: req.team
  }
  };

  const createRandomAttackers =()=> {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      country: faker.location.country(),
      image: ("uploads\player.jpg"),
      age: Math.floor(Math.random() * (40 - 18) + 18),
      position: "attacker",
      playerValue: 1000000,
      teamName: req.team
    }
    };

  const createRandomKeepers =()=> {
    return{
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      country: faker.location.country(),
      image: ("uploads\player.jpg"),
      age: Math.floor(Math.random() * (40 - 18) + 18),
      position: "goalKeeper",
      playerValue: 1000000,
      teamName: req.team
    }
    };

  req.randomPlayers = [];
  for (let i = 0; i < 6; i++) {
    req.randomPlayers.push(createRandomDefenders());
  }
  for (let i = 0; i < 6; i++) {
    req.randomPlayers.push(createRandomMidfielders());
  }
  for (let i = 0; i < 5; i++) {
    req.randomPlayers.push(createRandomAttackers());
  }
  for (let i = 0; i < 3; i++) {
    req.randomPlayers.push(createRandomKeepers());
  }
  try {
    const check = await new player.insertMany(req.randomPlayers)
    console.log(check)
  } catch (error) {
    console.log(error)
  }

  next();
};

module.exports = createRandomPlayersMiddleware;

