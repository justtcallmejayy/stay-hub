const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");

const PORT = 8080;
const DB_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Error connecting to database");
});

async function main() {
    await mongoose.connect(DB_URL);
    
}

app.get("/", (req, res) => {
    res.send("Hello World, from root");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});