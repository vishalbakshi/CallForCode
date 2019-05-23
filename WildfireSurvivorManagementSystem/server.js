const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 8080;

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.route("/application").get((req, res) => {
  res.sendFile(__dirname + "/WildfireSurvivorApplication/application.html");
});

app.route("/dashboard").get((req, res) => {
  res.sendFile(__dirname + "/WildfireSurvivorDashboard/dashboard.html");
});

const server = app.listen(port, function() {
  console.log("express listening on: " + port);
});
