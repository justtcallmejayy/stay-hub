const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello World, from root");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});