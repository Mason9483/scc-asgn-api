// Mason Conroy 
// Project 3
// 4/11/2022

let express = require('express')
let app = express();
const apiRouter = require("./asgn-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true});
var db = mongoose.connection;



var port = 3000;

app.use("/api", apiRouter)

app.get('/', (req, res) => res.send('Welcome to my Express server'));

app.listen(port, function () {
    console.log("Showing your assignments on port" + port);
});