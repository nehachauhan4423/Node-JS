const express = require('express');
const routes = express.Router()

const { productAdd, productView } = require('../controllers/ProductController');


routes.get('/',productAdd)
routes.get('/productview',productView)

module.export = routes