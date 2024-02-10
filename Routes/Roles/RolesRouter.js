const express = require('express')
const Router = express.Router()
const ROUTE_PREFIX = '/role'

// MIDDLEWARE
const { validate } = require('../../middlewares/ValidatorMiddleware')

// CONTROLLER
const RolesController = require('../../app/Controllers/Roles/RolesController') 

// VALIDATOR
const { roleAddRules, roleEditRules, roleDropRules, roleFindOneRules } = require('../../lib/validator/Roles/RolesValidators')

// ROUTE

/**
 * @openapi
 * /role/find-all:
 *   get:
 *     summary: Get all roles
 *     tags:
 *       - Roles
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
 * /role/find-one:
 *   get:
 *     summary: Get all roles
 *     tags:
 *       - Roles
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Role ID
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
Router.get(`${ROUTE_PREFIX}/find-all`, RolesController.findAll)
Router.post(`${ROUTE_PREFIX}/add`, roleAddRules() , validate , RolesController.add)
Router.get(`${ROUTE_PREFIX}/find-one/:id`,roleFindOneRules(), validate, RolesController.findOne)
Router.put(`${ROUTE_PREFIX}/edit`,roleEditRules(), validate, RolesController.edit)
Router.delete(`${ROUTE_PREFIX}/drop/:id`, roleDropRules(),validate, RolesController.drop)
Router.post(`${ROUTE_PREFIX}/asign-role`, roleDropRules(),validate, RolesController.asignRole)

module.exports = Router
