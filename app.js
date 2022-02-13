const express = require("express");
const http = require('http');
const path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(PORT)