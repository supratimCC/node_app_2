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
const { Permissions } = require("../../DB/Model/PermissionModel");
const { Roles } = require("../../DB/Model/RoleModel");
const { connectDB, closeDB } = require("../../DB/config/db");

// CONTROLLERS

// ADD PERMISSION
const add = async (req, res) => {
  try {
    const permission = await Permissions.create({
      name: req.body.name,
    });

    return res.status(CREATED).json({
      success: true,
      data: permission,
      message: "Permission added successfully. ",
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

// EDIT PERMISSION
const edit = async (req, res) => {
  const id = req.body.id;
  try {
    const permission = await Permissions.findByIdAndUpdate(id, {
      name: req.body.name,
    });

    const message = permission
      ? "Permission updated. "
      : "Permission Does not exist";

    return res.status(ACCEPTED).json({
      success: true,
      data: permission,
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

// DROP PERMISSION
const drop = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPerm = await Permissions.findByIdAndDelete(id);

    const message = deletedPerm
      ? "Permission deleted. "
      : "Permission Does not exist";
    return res.status(OK).json({
      success: true,
      data: deletedPerm,
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

// FIND ALL PERMISSIONS
const findAll = async (req, res) => {
  const page = parseInt(req.query.page) || PAGE;
  const limit = parseInt(req.query.limit) || RECORD_PER_PAGE;
  try {
    //
    const options = {
      page: page,
      limit: limit,
    };
    const allPerms = await Permissions.paginate({}, options);
    //

    return res.status(OK).json({
      success: true,
      data: allPerms,
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

// FIND ALL PERMISSIONS WITHOUT LIMIT AND PAGE
const allperm = async (req, res) => {
  try {
    const allPerms = await Permissions.find();

    return res.status(OK).json({
      success: true,
      data: allPerms,
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

// FIND ONE PERMISSION
const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const permsDetails = await Permissions.findById(id).exec();

    const message = permsDetails
      ? "Request successful"
      : "Permission Does not exist";

    return res.status(OK).json({
      success: true,
      data: permsDetails,
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

const search = async (req, res) => {};

// ASSIGN PERMISSION
const assign = async (req, res) => {
  const permId = req.body.perm;
  const roleId = req.body.role;

  try {
    let data;
    const permStatus = await Roles.find({ permissions: { $in: [permId] } });
    if (permStatus.length > 0) {
      // DELETE PERM
      //
      const del = await Roles.findByIdAndUpdate(roleId, {
        $pull: { permissions: permId },
      });
      //
    } else {
      // ADD PERM
      //
      const add = await Roles.findByIdAndUpdate(roleId, {
        $addToSet: { permissions: permId },
      });
      //
    }
    return res.status(OK).json({
      success: true,
      data: "data",
      message: "Request successful",
      error: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_SERVER_ERROR).json({
      success: false,
      data: {},
      message: error.message,
      error: true,
    });
  }
};

module.exports = {
  add,
  edit,
  drop,
  findAll,
  findOne,
  search,
  assign,
  allperm,
};
