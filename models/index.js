//set up your database and schemas
//connect the book & user databases
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432", {
  logging: false
});

//in the CLI, "createdb nameOfDB" to make database!

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  pageCount: {
    type: Sequelize.INTEGER
  },

  aggregateRating: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  urlImage: {
    type: Sequelize.STRING //not sure about this one-- check
  },

  reviews: {
    type: Sequelize.ARRAY(Sequelize.TEXT), //not sure about this one either-- check
    allowNull: false
  }
});
//
// //beforeCreate or beforeValidate to  make sure title is capitalized properly before entering it into the db
// //each book rating should have a getter attached for reviews + ratings
//
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  personalLibrary: {
    type: Sequelize.ARRAY(Sequelize.STRING), //this would be an array of objects
    allowNull: false
    //To Read and Read?
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
//   //how to get the ability to give a rating and review for each book, separate from the general table?
});


User.hasMany(Book, {as: "Reader"});

module.exports = {
  Book, User, db
};
