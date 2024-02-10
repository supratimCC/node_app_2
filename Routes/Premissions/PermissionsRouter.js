const express = require('express')
const Router = express.Router()
const ROUTE_PREFIX = '/permissions'

// MIDDLEWARE
const { validate } = require('../../middlewares/ValidatorMiddleware')

// CONTROLLER
const PermissionsController = require('../../app/Controllers/Permisions/PermissionsController') 

// VALIDATOR
const { permissionsAddRules, permissionsEditRules, permissionsDropRules, permissionsFindOneRules, permissionAssignRules, permissionRevokeRules } = require('../../lib/validator/Permissions/PermissionsValidators')

// ROUTE

/**
 * @openapi
 * /user/find-all:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *       - name: limit
 *         in: query
 *         description: Number of record  
 *         required: false
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *       '500':
 *         description: Bad request
 */
/**
 * @openapi
 * /user/find-one:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *       '500':
 *         description: Bad request
 */
Router.get(`${ROUTE_PREFIX}/find-all`, PermissionsController.findAll)
Router.get(`${ROUTE_PREFIX}/all-perm`, PermissionsController.allperm)
Router.post(`${ROUTE_PREFIX}/add`, permissionsAddRules() , validate , PermissionsController.add)
Router.get(`${ROUTE_PREFIX}/find-one/:id`,permissionsFindOneRules(), validate, PermissionsController.findOne)
Router.put(`${ROUTE_PREFIX}/edit`,permissionsEditRules(), validate, PermissionsController.edit)
Router.delete(`${ROUTE_PREFIX}/drop/:id`, permissionsDropRules(),validate, PermissionsController.drop)
Router.post(`${ROUTE_PREFIX}/assign`, permissionAssignRules(),validate, PermissionsController.assign)

module.exports = Router
