// load the things we need
var express = require("express");
var app = express();
var mysql = require("mysql");
var koneksi = require("./koneksi");
// set the view engine to ejs
var kon = koneksi;
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/product", function (req, res) {
  res.render("pages/products");
});

app.listen(3000);
console.log("3080 is the magic port");
