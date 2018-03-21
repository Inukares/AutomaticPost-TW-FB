"use strict";

var express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  routes = require("./routes/twitterRouter");

var app = express();

// enable cors
var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use(cors(corsOption));

//rest API requirements
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/api/v1", routes);

module.exports = app;

app.listen(4000);

console.log("Server running at http://localhost:4000/");
