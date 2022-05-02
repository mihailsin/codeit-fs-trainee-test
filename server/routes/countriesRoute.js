const express = require("express");
const router = express.Router();
const pool = require("../database/db");

router.get("/", async (req, res) => {
  try {
    const countries = await pool.query("SELECT * FROM country");
    res.status(200).json(countries.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

module.exports = router;
