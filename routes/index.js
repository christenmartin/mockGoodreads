//handle routing index
//require models
//do I need to create a route here AND two further sub-routes in Book and User?

const express = require("express");
const router = express.Router();

const {Book, User} = require("../models");
// const User = models.User;

//how do I know whether to mostly direct to Book or Users?



module.exports = router; //does it matter if this is at the beginning or end of the document?
