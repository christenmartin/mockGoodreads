'use strict'

// why exactly do we need to use strict here?

//requirements
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path"); //Q: what exactly does path do? is it only for serving html files like w/ static? think so
const routes = require("./routes");
const models = require("./models");


//Q: I only need models required in this file bc i happened to sync the db here, right? do i need to
//include both User and Book routes here? seems like i could just direct everything to routes and direct from index there to Book or User

//add middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//redirect to routes index
app.use('/', routes);

app.use(function(error, req, res, next) {
  //write out error handling logic
});

//connect the db and start the server
models.db.sync({force: false})
  .then(function() {
    app.listen(3000, function() {
      console.log("server is listening");
    });
  })
  .catch();
