const express = require('express')
const Router = express.Router()
const ROUTE_PREFIX = '/user'

// MIDDLEWARE
const { validate } = require('../../middlewares/ValidatorMiddleware')

// CONTROLLER
const UserController = require('../../app/Controllers/Users/UserController') 

// VALIDATOR
const { userAddRules, userEditRules, userDropRules, userFindOneRules } = require('../../lib/validator/Users/UserValidators')

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
Router.get(`${ROUTE_PREFIX}/find-all`, UserController.findAll)
Router.post(`${ROUTE_PREFIX}/add`, userAddRules() , validate , UserController.add)
Router.get(`${ROUTE_PREFIX}/find-one/:id`,userFindOneRules(), validate, UserController.findOne)
Router.put(`${ROUTE_PREFIX}/edit`,userEditRules(), validate, UserController.edit)
Router.delete(`${ROUTE_PREFIX}/drop`, userDropRules(),validate, UserController.drop)

module.exports = Router
