const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const routes = require("./routes/proRoutes")

const app = express()

app.use(express.json())


const port = process.env.port
const uri = process.env.uri

app.listen(port, ()=>{
    mongoose.connect( uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongo connected")
    }).catch((error) => {
        console.log(error.message)
        console.log(error)
    })
    console.log(`Server listening on ${port}`)
})

app.use(routes)