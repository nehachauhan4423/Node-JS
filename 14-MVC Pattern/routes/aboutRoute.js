const express = require('express');
const { addPage, viewPage } = require('../controllers/AboutController');

const routes = express.Router()

routes.get('/',addPage)
routes.get('/view',viewPage)

module.exports = routes