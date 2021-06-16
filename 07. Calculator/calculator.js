//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // urlencoded: pass data that comes from a html form. extended true: allows us to post nested objects.


app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = (weight / Math.pow(height, 2)).toFixed(2);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
