const { OK } = require("../../../lib/constants");
const jwt = require("jsonwebtoken");
const {Users} = require('../../DB/Model/UserModal')

// GOOGLE SSO
GoogleLogin = async (req, res) => {
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

// CRED LOGIN
login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .compare(password, userDetails.password)
    .then((data) => {
      if (data) {
        // CREATE TOKEN
        const token = jwt.sign({ email: email }, process.env.TOKEN_KEY, {
          expiresIn: "1h",
        });

        return res.status(200).json({
          status: true,
          message: `Welcome ${userDetails.email}`,
          token: token,
          details: userDetails,
        });
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Unauthorized user" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ status: false, message: "Unauthorized" });
    });
};

module.exports = {
  login,
  GoogleLogin
};
