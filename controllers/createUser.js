const user = require('../models/userSchema');
const bcrypt = require('bcrypt');
const http = require("http-status-codes");
const userJoi = require("../validators/userJoi");

const createUser = async (req, res, next) => {
  const { error, value } = userJoi.validate(req.body);
  if (error) {
    return res.status(http.StatusCodes.BAD_REQUEST).send("Invalid details");
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(value.password, salt);
    if (!hashedPassword) {
      return res.status(http.StatusCodes.BAD_REQUEST).send("Invalid details");
    }

    try {
      const userCreate = await user.create({
        email: value.email,
        username: value.username,
        password: hashedPassword,
      });
    } catch (error) {
      console.log(error);
      return res.status(http.StatusCodes.BAD_REQUEST).send("Failed to create user");
    }

    // Do not send response here if you are calling next()
    req.email = value.email;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = createUser;
