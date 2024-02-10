// CONSTANTS
const {
  OK,
  CREATED,
  INTERNAL_SERVER_ERROR,
  ACCEPTED,
  RECORD_PER_PAGE,
  PAGE,
} = require("../../../lib/constants");
//MODELS
const { Users } = require("../../DB/Model/UserModal");
const { connectDB, closeDB } = require("../../DB/config/db");

// CONTROLLERS

// ADD USERS
const add = async (req, res) => {
  try {
    const user = await Users.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
    });

    return res.status(CREATED).json({
      success: true,
      data: user,
      message: "User added successfully. ",
      error: null,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

// EDIT USERS
const edit = async (req, res) => {
  const id = req.body.id;
  try {
    const user = await Users.findByIdAndUpdate(id, {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
    });

    const message = user ? user : "User Does not exist";

    return res.status(ACCEPTED).json({
      success: true,
      data: user,
      message: message,
      error: null,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

// DROP USERS
const drop = async (req, res) => {
  const id = req.body.id;
  try {
    const deletedUser = await Users.findByIdAndDelete(id);

    const message = deletedUser ? deletedUser : "User Does not exist";
    return res.status(OK).json({
      success: true,
      data: deletedUser,
      message: message,
      error: null,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

// FIND ALL USERS
const findAll = async (req, res) => {
  const page = parseInt(req.query.page) || PAGE;
  const limit = parseInt(req.query.limit) || RECORD_PER_PAGE;
  try {
    const options = {
      page: page,
      limit: limit,
    };
    const allUsers = await Users.paginate({}, options);

    return res.status(OK).json({
      success: true,
      data: allUsers,
      message: "Request successful",
      error: null,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

// FIND ONE USERS
const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetails = await Users.findById(id).exec();

    return res.status(OK).json({
      success: true,
      data: userDetails,
      message: "Request successful",
      error: null,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

const search = (req, res) => {};

// USER WITHOUT ROLE
const noRole = async (req, res) => {
  return res.status(OK).json({
    success: true,
    data: "ok",
    message: "Request successful",
    error: null,
  });
};

// USER WITH ROLE
const haseRole = async (req, res) => {
  return res.status(OK).json({
    success: true,
    data: "ok",
    message: "Request successful",
    error: null,
  });
};

module.exports = {
  add,
  edit,
  drop,
  findAll,
  findOne,
  search,
};
