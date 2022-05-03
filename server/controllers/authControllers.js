const bcrypt = require("bcrypt");
const jwt = require("../utils/jwtGenerator");
const {
  userMailQuery,
  userLoginQuery,
  addUserQuery,
} = require("../database/dbQueries");

const registerUserController = async (req, res) => {
  try {
    const { email, login, realname, password, birthdate, country } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const userMail = await userMailQuery(email);
    if (userMail.rows.length !== 0) {
      return res.status(401).json("Entered email is taken");
    }
    const userLogin = await userLoginQuery(login);
    if (userLogin.rows.length !== 0) {
      return res.status(401).json("Entered login is taken");
    }
    const newUser = await addUserQuery(
      email,
      login,
      realname,
      encryptedPassword,
      birthdate,
      country
    );
    const token = jwt(newUser.rows[0].user_id);
    return res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newUser.rows[0],
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Error");
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userMailQuery(email);

    if (user.rows.length === 0) {
      return res.status(401).json("Entered email is incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json("Entered password is incorrect");
    }

    const token = jwt(user.rows[0].user_id);
    return res.status(201).json({
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
};

const verifyUserController = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  verifyUserController,
};
