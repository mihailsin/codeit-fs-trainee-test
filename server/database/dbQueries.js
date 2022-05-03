const pool = require("../database/db");

const userMailQuery = async (email) =>
  await pool.query("SELECT * FROM users WHERE email = $1", [email]);

const userLoginQuery = async (login) =>
  await pool.query("SELECT * FROM users WHERE login = $1", [login]);

const userIdQuery = async (user) =>
  await pool.query("SELECT * FROM users WHERE user_id = $1", [user]);

const addUserQuery = async (
  email,
  login,
  realname,
  encryptedPassword,
  birthdate,
  country
) =>
  await pool.query(
    "INSERT INTO users (email, login, realname, password, birthdate, country) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
    [email, login, realname, encryptedPassword, birthdate, country]
  );

const getCountriesQuery = async () => await pool.query("SELECT * FROM country");

module.exports = {
  userMailQuery,
  userLoginQuery,
  userIdQuery,
  addUserQuery,
  getCountriesQuery,
};
