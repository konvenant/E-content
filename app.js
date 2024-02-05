const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs')


app.get("/", function (req, res){
  res.render("home");
});
app.get("/appendix", function (req, res){
  res.render("appendix");
});
app.get("/appendixg", function (req, res){
  res.render("appendf");
});
app.get("/weekone", function (req, res){
  res.render("weekone");
});
app.get("/weektwo", function (req, res){
  res.render("weektwo");
});
app.get("/weekthree", function (req, res){
  res.render("weekthree");
});
app.get("/weekfour", function (req, res){
  res.render("weekfour");
});
app.get("/weekfive", function (req, res){
  res.render("weekfive");
});

app.post("/", function(req,res){
  var input = req.body.input;

  if(input == "nelson" || input == "Nelson" || input == "NELSON"){
    setTimeout(() => res.render("appendix"), 1000)
  } else{
console.log("error");
setTimeout(() => res.render("home"), 10000)
  }
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
  console.log("port started successfully");
});
