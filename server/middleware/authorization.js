const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtValidation = async (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token) {
      return res.status(403).send("Not authorized");
    }
    const payload = jwt.verify(token, process.env.jwts);
    req.user = payload.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).send("Not authorized");
  }
};

module.exports = jwtValidation;
