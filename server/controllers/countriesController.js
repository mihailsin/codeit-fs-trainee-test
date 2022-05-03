const { getCountriesQuery } = require("../database/dbQueries");
const countriesController = async (req, res) => {
  try {
    const countries = await getCountriesQuery();
    return res.status(200).json(countries.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
};

module.exports = countriesController;
