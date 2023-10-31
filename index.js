const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes  = require("./App/Routes/routes")

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

const dbURL = process.env.DBURL
mongoose.connect(dbURL)
const database = mongoose.connection;

database.on('error', (err) => {
    console.log("Error connecting to database ", err)
})

database.once("connected", () => {
    console.log("successfully connedted to mongodb")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes)

app.listen(port, () => {
    console.log("server is up and running ")
});