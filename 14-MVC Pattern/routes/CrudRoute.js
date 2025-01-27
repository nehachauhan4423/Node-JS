const express = require('express');

const { viewPage, addPage } = require('../controllers/CrudControllers');

const routes = express.Router();

routes.get('/',viewPage)
routes.get('/add',addPage)

module.exports = routes