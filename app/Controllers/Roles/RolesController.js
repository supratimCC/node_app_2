// CONSTANTS
const {
  OK,
  CREATED,
  INTERNAL_SERVER_ERROR,
  ACCEPTED,
  PAGE,
  RECORD_PER_PAGE,
} = require("../../../lib/constants");
//MODELS
const { Roles } = require("../../DB/Model/RoleModel");
const { Users } = require("../../DB/Model/UserModal");
const { connectDB, closeDB } = require("../../DB/config/db");

// CONTROLLERS

// ADD ROLE
const add = async (req, res) => {
  try {
    
    const role = await Roles.create({
      name: req.body.name,
    });
    
    return res.status(CREATED).json({
      success: true,
      data: role,
      message: "Role added successfully. ",
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

// EDIT ROLE
const edit = async (req, res) => {
  const id = req.body.id;
  try {
    
    const role = await Roles.findByIdAndUpdate(id, {
      name: req.body.name,
    });
    

    const message = role ? "Role updated. " : "User Does not exist";

    return res.status(ACCEPTED).json({
      success: true,
      data: role,
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

// DROP ROLE
const drop = async (req, res) => {
  const id = req.params.id;
  try {
    
    const deletedRole = await Roles.findByIdAndDelete(id);
    
    const message = deletedRole ? "Role deleted." : "Role Does not exist";
    return res.status(OK).json({
      success: true,
      data: deletedRole,
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

// FIND ALL ROLE
const findAll = async (req, res) => {
  const page = parseInt(req.query.page) || PAGE;
  const limit = parseInt(req.query.limit) || RECORD_PER_PAGE;
  try {
    // 
    const options = {
      page: page,
      limit: limit,
      sort: { createdAt: -1 },
    };
    const allRoles = await Roles.paginate({}, options);
    // 

    return res.status(OK).json({
      success: true,
      data: allRoles,
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

// FIND ONE ROLE
const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    
    const roleDetails = await Roles.findById(id).exec();
    
    const message = roleDetails ? "Request successful" : "Role Does not exist";

    return res.status(OK).json({
      success: true,
      data: roleDetails,
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

const search = (req, res) => {};

// ASSIGN ROLE
const asignRole = async (req, res) => {
  const roleId = req.body.role;
  const userId = req.body.user;

  try {
    // 
    const userDetails = await Users.findById(userId);
    if (userDetails.role) {
      console.log("object");
    }
    // 
  } catch (error) {}

  // return res.status(OK).json({
  //   success: true,
  //   data: ,
  //   message: ,
  //   error: null,
  // });
};

module.exports = {
  add,
  edit,
  drop,
  findAll,
  findOne,
  search,
  asignRole,
};
