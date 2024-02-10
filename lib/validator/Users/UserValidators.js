const { body, param } = require("express-validator");

const userAddRules = () => {
  return [
    body("firstName")
      .notEmpty().withMessage("Email is required. ")
      .isLength({ min: 1, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
    body("lastName")
      .notEmpty()
      .isLength({ min: 1, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
    body("email").notEmpty().isEmail().notEmpty(),
    body("password")
      .isLength({ min: 4, max: 50 })
      .matches(/^[a-zA-Z0-9*$/%&@!()]+$/),
  ];
};

const userEditRules = () => {
  return [
    body("id", "User ID is required").notEmpty(),
    body("firstName")
      .notEmpty()
      .isLength({ min: 2, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
    body("lastName")
      .notEmpty()
      .isLength({ min: 1, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
    body("password")
      .isLength({ min: 4, max: 50 })
      .matches(/^[a-zA-Z0-9*$/%&@!()]+$/),
  ];
};

const userDropRules = () => {
  return [body("id", "User ID is required").notEmpty()];
};

const userFindOneRules = () => {
  return [param("id", "User ID is required").notEmpty()];
};

module.exports = {
  userAddRules,
  userEditRules,
  userDropRules,
  userFindOneRules,
};
