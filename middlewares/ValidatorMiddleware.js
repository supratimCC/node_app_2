const { validationResult } = require("express-validator");
const { BAD_REQUEST } = require("../lib/constants");
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  
  return res.status(BAD_REQUEST).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validate,
};
