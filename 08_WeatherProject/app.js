//jshint esversion: 6

const express = require("express");
const https = require("https");
const apiKey = require("./keys").apiKey;
const bodyParser = require("body-parser"); 

const app = express(); // initialize a new express app

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit + "";

    https.get(url, function (response) {
        console.log("status code: " + response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h1>The weather is currently " + weatherDescription + ".</h1>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius.</h1>");
            res.write("<img src=" + iconUrl + ">");
            res.send();
        });
    });
});

app.listen(3000, function () {
    console.log("The server is running on port 3000");
});
