const express = require("express");
const {
  hasBrowserCrypto,
} = require("google-auth-library/build/src/crypto/crypto");
const { User } = require("../models/usersModel");
const googleRouter = express.Router();

googleRouter.post("/", async (req, res) => {
  const newUser = new User({
    firstname: req.body.first_name,
    lastname: req.body.last_name,
    email: req.body.yor_email,
    password: req.body.client_id + req.body.yor_email,
  });
  await newUser.save();
  res.status(201).send({ message: "User created successfully" });
});

module.exports = googleRouter;
