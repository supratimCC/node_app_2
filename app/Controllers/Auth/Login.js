login = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Sucessfully loged in. ",
    error: null,
  });
};

module.exports = {
  login
};
