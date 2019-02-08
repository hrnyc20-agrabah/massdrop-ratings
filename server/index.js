const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const db = require('../database/index.js')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'))

app.get('/', function (req, res, next) {
    res.sendStatus(200)
})





const port = 7000
app.listen(port, function () {
    console.log(`server is listening on ${port}`)
});

