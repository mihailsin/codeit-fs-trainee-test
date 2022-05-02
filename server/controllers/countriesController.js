const pool = require("../database/db");

const countriesController = async (req, res) => {
  try {
    const countries = await pool.query("SELECT * FROM country");
    res.status(200).json(countries.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
};

module.exports = countriesController;
