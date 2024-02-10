const { body } = require("express-validator");

const loginValidationRules = () => {
  return [
    body("email", "email is required")
      .notEmpty()
      .isEmail()
      .withMessage("Username must be an email"),
    body("password", "password is required").notEmpty().isLength({ min: 5 }),
  ];
};

module.exports = {
  loginValidationRules,
};
