const express = require("express");
const router = express.Router();
const { Book, User } = require("./models");

module.exports  = router;

//So I thiiiink I want 2 sub-routes for users-- one for them to be able to interact w the main database (get all books, or get some
//books if they match a particular property, and add a book), and one for them to be able to interact with their personal
//library (get all their books, get some of their books if they match a particular property, add a book, delete a book page, edit their rating/review on a book page)

router.get("/", (req, res, next) => {
    //get all books in the database
})

router.get("/:id", (req, res, next) => {
    //get a particular book in the database
})

router.get("/", (req, res, next) => {
  //get a book in the database if it matches a condition
     // 1. one route will return whatever books contains one of the search words in the title)
     // 2. one route will return whatever books have a rating at or above X
})

router.post("/", (req, res, next) => {
  //add a book to the user's library
})

router.put("/", (req, res, next) =>
  //update a book in the user's library (give or change rating/review)
})

router.delete("/", (req, res, next) =>
  //delete a book from the user's library
})
