const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countriesController");

//get countries list

router.get("/", countriesController);

module.exports = router;
