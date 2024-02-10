const { OK } = require("../../../lib/constants");
const jwt = require("jsonwebtoken");

login = async (req, res) => {
  // FIND USERS
  const User = req.user;
  // CREATE TOKEN
  const token = jwt.sign(
    {
      id: User.id,
      username: User.email,
      name: User.displayName,
    },
    process.env.TOKEN_KEY,
    { expiresIn: "1h" }
  );

  return res.status(OK).json({
    success: true,
    token: token,
    message: "Sucessfully loged in.",
    error: null,
  });
};

module.exports = {
  login,
};
