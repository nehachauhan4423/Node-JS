const express = require('express');
const { addPage, viewPage } = require('../controllers/BlogController');

const routes = express.Router()

routes.get('/',addPage)
routes.get('/view',viewPage)

module.exports = routes