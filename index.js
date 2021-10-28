const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const poll = require("./routes/poll");

// set public folder
app.use(express.static(path.join(__dirname, "public")));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors
app.use(cors());

// use route
app.use("/poll", poll);

const port = 8000;

app.listen(port, () => console.log(`sever is up and running on port: ${port}`));
