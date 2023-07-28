const nodemailer = require('nodemailer')
const http = require("http-status-codes")

const mailer = (req, res, next)=>{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "yungestbee@gmail.com",
        pass: process.env.gmailPassword
    }
})

transporter.sendMail({
    from: "yungestbee@gmail.com",
    to: req.email,
    subject: "Football Fantasy",
    text: `Welcome to football fantasy, It's nice having you on board.. /n Your team has been created, proceed to set your team up..`
}, (error, info)=>{
    if (error) console.log(error)
    else console.log(info.messageId)
})
res.status(http.StatusCodes.CREATED).send("Team successfully Created!!!")
}

module.exports = mailer