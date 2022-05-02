const express = require("express");
const router = express.Router();
const {
  registerValidation,
  logInValidation,
} = require("../middleware/fieldsValidation");
const tokenValidation = require("../middleware/authorization");
const {
  registerUserController,
  loginUserController,
  verifyUserController,
} = require("../controllers/authControllers");

// REGISTER

router.post("/register", registerValidation, registerUserController);

//LOG IN

router.post("/login", logInValidation, loginUserController);

// CHECK ISLOGGEDIN

router.get("/verify", tokenValidation, verifyUserController);

module.exports = router;
