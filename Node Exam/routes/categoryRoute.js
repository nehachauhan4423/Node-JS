const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 
const path = require('path');
const routes = express.Router()
const CategoryModel = require('../models/CategoryModel');
const passport = require('passport')

const { viewCategoryPage, addCategoryPage, insertCategory, deleteCategory, editCategory, updateCategory, changeStatus } = require('../controller/CategoryController');

routes.get('/',viewCategoryPage)
routes.get('/addcategorypage',passport.checkUser,addCategoryPage)
// routes.post('/insertcategory',insertCategory)
routes.get('/deletecategory',deleteCategory)
routes.get('/editcategory',editCategory)
routes.post('/updatecategory',updateCategory)
routes.get('/changestatus',changeStatus)
routes.post('/insertcategory', upload.single('image'),insertCategory);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Store images in 'public/uploads'
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});



module.exports = routes;