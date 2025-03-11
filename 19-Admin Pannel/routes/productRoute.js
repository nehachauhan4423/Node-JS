const express = require('express');

const routes = express.Router();

const { viewproductsubcategorypage, addproductcategorypage, insertProductCategory, ajaxProductCategorywiseRecord, changeStatus, deleteProductCategegory, editProductcategory } = require('../controller/ProductController');

routes.get('/',viewproductsubcategorypage)
routes.get('/productaddcategory',addproductcategorypage)
routes.get('/ajaxproductcategorywiserecord',ajaxProductCategorywiseRecord)
routes.post('/insertproductcategory',insertProductCategory)
routes.get('/changestatus',changeStatus)
routes.get('/deleteproductcategegory', deleteProductCategegory)
routes.get('/editproductcategory', editProductcategory)

module.exports = routes;