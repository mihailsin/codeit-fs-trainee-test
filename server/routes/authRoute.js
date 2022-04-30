const express = require("express");
const router = express.Router();
const pool = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwtGenerator");

// REGISTER

router.post("/register", async (req, res) => {
  try {
    const { email, login, realname, password, birthdate } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }
    const newUser = await pool.query(
      "INSERT INTO users (email, login, realname, password, birthdate) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [email, login, realname, encryptedPassword, birthdate]
    );
    const token = jwt(newUser.rows[0].user_id);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newUser.rows[0],
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

//LOG IN

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Entered email or password incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).send("Entered email or password incorrect");
    }

    const token = jwt(user.rows[0].user_id);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: user.rows[0],
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
});

module.exports = router;
