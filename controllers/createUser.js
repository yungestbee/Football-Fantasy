const user = require('../models/userSchema');
const bcrypt = require('bcrypt');
const http = require("http-status-codes");
const userJoi = require("../validators/userJoi");

//create a new user 
const createUser = async (req, res, next) => {
  const { error, value } = userJoi.validate(req.body);
  if (error) {
    return res.status(http.StatusCodes.BAD_REQUEST).send("Invalid details");
  }
//generate a salt and also hash the password recieved from the req.body
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(value.password, salt);
    if (!hashedPassword) {
      return res.status(http.StatusCodes.BAD_REQUEST).send("Invalid details");
    }

  //create and save data into the database
    try {
      const userCreate = await user.create({
        email: value.email,
        username: value.username,
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
      return res.status(http.StatusCodes.BAD_REQUEST).send("User already exists");
    }
    req.email = value.email;

    //move the operation to the next middleware/controller using next()
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
