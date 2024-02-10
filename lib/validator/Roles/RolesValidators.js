const { body, param } = require("express-validator");

const roleAddRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Role is required. ")
      .isLength({ min: 1, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
  ];
};

const roleEditRules = () => {
  return [
    body("id", "Role ID is required").notEmpty(),
    body("name")
      .notEmpty()
      .isLength({ min: 2, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
  ];
};

const roleDropRules = () => {
  return [param("id", "Role ID is required").notEmpty()];
};

const roleAsignRules = () => {
  return [
    body("role", "Role ID is required").notEmpty(),
    body("user", "User ID is required").notEmpty(),
  ];
};

const roleRevokeRules = () => {
  return [
    body("role", "Role ID is required").notEmpty(),
    body("user", "User ID is required").notEmpty(),
  ];
};

const roleFindOneRules = () => {
  return [param("id", "Role ID is required").notEmpty()];
};

module.exports = {
  roleAddRules,
  roleEditRules,
  roleDropRules,
  roleFindOneRules,
};
