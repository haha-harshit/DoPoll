const express = require("express");
const router = express.Router();

const pollController = require("../controllers/poll");

router.get("/", pollController.poll);

module.exports = router;
