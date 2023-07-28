The requirements for this project are:

* Write a soccer online manager game API *



You need to write a RESTful or GraphQL API for a simple application where football/soccer fans will create fantasy teams and will be able to sell or buy players.

User must be able to create an account and log in using the API.

Each user can have only one team (user is identified by an email)

When the user is signed up, they should get a team of 20 players (the system should generate players):

3 goalkeepers

6 defenders

6 midfielders

5 attackers

Each player has an initial value of $1.000.000.

Each team has an additional $5.000.000 to buy other players.

When logged in, a user can see their team and player information

Team has the following information:

Team name and a country (can be edited)

Team value (sum of player values)

Player has the following information

First name, last name, country (can be edited by a team owner)

Age (random number from 18 to 40) and market value

A team owner can set the player on a transfer list

When a user places a player on a transfer list, they must set the asking price/value for this player. This value should be listed on a market list. When another user/team buys this player, they must be bought for this price.

Each user should be able to see all players on a transfer list.

With each transfer, team budgets are updated.

When a player is transferred to another team, their value should be increased between 10 and 100 percent. Implement a random factor for this purpose.

Make it possible to perform all user actions via RESTful or GraphQL API, including authentication.

You are to get creative when using the various third party packages and make sure their use cases are  properly implemented in your project. Some of these projects may include: Express, Mongoose, Sequelize, Axios, jsonwebtoken, bcryptjs, Passport, cors, helmet, compression, morgan, dotenv, winston, joi, nodemailer, socket.io, multer, node-schedule, lodash, moment, jest, supertest amongst others.

You are required to write test cases to test every aspect of your API.

You should also write a detailed documentation for your API.

Submission:

You are to submit the task on or before 12 midnight by Sunday the 30th of July.

You are to submit the link to your github repository