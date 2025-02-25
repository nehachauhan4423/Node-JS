const express = require('express');


const routes = express.Router();

const { viewCategoryPage, addCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory, changeStatus } = require('../controller/CategoryConroller');

routes.get('/',viewCategoryPage)
routes.get('/addcategorypage',addCategoryPage)
routes.post('/insertcategory',insertCategory)
routes.get('/deletecategory',deleteCategory)
routes.get('/editcategory',editCategory)
routes.post('/updatecategory',updateCategory)
routes.get('/changestatus',changeStatus)

module.exports = routes;