const express = require('express');

const routes = express.Router();

const { viewexsubcategorypage, addexsubcategorypage, ajaxCategorywiseRecord, insertExsubCategory, deleteexsubcategegory, editExsubcategory, changeStatus } = require('../controller/ExsubcategoryController');


routes.get('/',viewexsubcategorypage)
routes.get('/exaddsubcategory',addexsubcategorypage);
routes.get('/ajaxcategorywiserecord',ajaxCategorywiseRecord)
routes.post('/insertexsubcategory',insertExsubCategory)
routes.get('/deleteexsubcategegory', deleteexsubcategegory)
routes.get('/editexsubcategory', editExsubcategory)
routes.get('/changestatus',changeStatus)

module.exports = routes;