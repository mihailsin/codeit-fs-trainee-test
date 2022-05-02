const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id) {
  const payload = {
    user: id,
  };
  return jwt.sign(payload, process.env.jwts, { expiresIn: "2hr" });
}

module.exports = jwtGenerator;
