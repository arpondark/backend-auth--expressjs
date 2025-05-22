const router = require("express").Router();
const { signup, login } = require("../Controllers/AuthController");
const {
  loginValidation,
  signupValidation,
} = require("../Middlewares/AuthValidation");

router.post("/signup", signupValidation, signup);

router.post("/login", loginValidation, login);

module.exports = router;
