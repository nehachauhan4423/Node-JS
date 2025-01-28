const express = require('express');
const routes = express.Router()

const { viewPage, addPage } = require('../controllers/CrudControllers');


routes.get('/',viewPage)
routes.get('/add',addPage)

module.exports = routes