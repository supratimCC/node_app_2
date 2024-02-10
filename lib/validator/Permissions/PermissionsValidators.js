const { body, param } = require("express-validator");

const permissionsAddRules = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Permissions name is required. ")
      .isLength({ min: 1, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
  ];
};

const permissionsEditRules = () => {
  return [
    body("id", "Permissions ID is required").notEmpty(),
    body("name")
      .notEmpty()
      .isLength({ min: 2, max: 50 })
      .matches(/[a-zA-z0-9\(/\)/]/),
  ];
};

const permissionsDropRules = () => {
  return [param("id").notEmpty().withMessage("Permissions ID is required ")];
};

const permissionsFindOneRules = () => {
  return [param("id", "Permissions ID is required").notEmpty()];
};

const permissionAssignRules = () => {
  return [
    body("perm", "Permissions ID is required").notEmpty(),
    body("role", "Role ID is required").notEmpty(),
  ];
};

const permissionRevokeRules = () => {
  return [
    body("perm", "Permissions ID is required").notEmpty(),
    body("role", "Role ID is required").notEmpty(),
  ];
};

module.exports = {
  permissionsAddRules,
  permissionsEditRules,
  permissionsDropRules,
  permissionsFindOneRules,
  permissionAssignRules,
  permissionRevokeRules,
};
