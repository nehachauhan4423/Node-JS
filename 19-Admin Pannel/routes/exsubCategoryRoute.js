const express = require('express');

const routes = express.Router();

const { viewexsubcategorypage, addexsubcategorypage, ajaxCategorywiseRecord, insertExsubCategory } = require('../controller/ExsubcategoryController');


routes.get('/',viewexsubcategorypage)
routes.get('/exaddsubcategory',addexsubcategorypage);
routes.get('/ajaxcategorywiserecord',ajaxCategorywiseRecord)
routes.post('/insertexsubcategory',insertExsubCategory)

module.exports = routes;