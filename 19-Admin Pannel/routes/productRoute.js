const express = require('express');

const routes = express.Router();

const { viewproductsubcategorypage, addproductcategorypage, insertProductCategory, ajaxProductCategorywiseRecord } = require('../controller/ProductController');

routes.get('/',viewproductsubcategorypage)
routes.get('/productaddcategory',addproductcategorypage)
routes.get('/ajaxproductcategorywiserecord',ajaxProductCategorywiseRecord)
routes.post('/insertproductcategory',insertProductCategory)

module.exports = routes;