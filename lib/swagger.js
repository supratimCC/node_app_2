const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API documentation for user-related operations',
    },
  },
  apis: ['./Routes/User/UserRouter.js','./Routes/Roles/RolesRouter.js'], // Path to your router file
};

const specs = swaggerJsdoc(options);

module.exports = specs;
