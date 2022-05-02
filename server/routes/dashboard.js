const express = require("express");
const router = express.Router();
const tokenValidation = require("../middleware/authorization");
const validateTokenController = require("../controllers/dashboardController");

router.get("/", tokenValidation, validateTokenController);

module.exports = router;
