const express = require("express");
const router = express.Router();
const { Book, User } = require("./models");
module.exports = router;

router.get("/", (req, res, next) => {
  //get a list of all users
})

router.get("/:id", (req, res, next) => {
  //get one particular user (would display their library, with the reviews and ratings of each book in it )
})

router.post("/", (req, res, next) =>
  //is this the right structure for es6?
)}

router.delete("/:id", (req, res, next) =>
  //delete
)}
