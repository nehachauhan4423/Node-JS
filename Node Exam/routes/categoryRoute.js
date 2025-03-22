const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 


const routes = express.Router();

const { viewCategoryPage, addCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory, changeStatus } = require('../controller/CategoryController');

routes.get('/',viewCategoryPage)
routes.get('/addcategorypage',addCategoryPage)
// routes.post('/insertcategory',insertCategory)
routes.get('/deletecategory',deleteCategory)
routes.get('/editcategory',editCategory)
routes.post('/updatecategory',updateCategory)
routes.get('/changestatus',changeStatus)
routes.post('/insertcategory', upload.single('image'),insertCategory);


module.exports = routes;