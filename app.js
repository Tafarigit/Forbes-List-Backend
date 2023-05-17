const express = require('express');
const cors = require('cors');

const giftsControllers = require('./Controllers/giftsControllers.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the House of Swag")
});

app.use("/gifts", giftsControllers);

module.exports = app;