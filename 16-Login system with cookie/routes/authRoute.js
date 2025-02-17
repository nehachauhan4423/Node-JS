const express = require('express');

const { loginPage, registerPage, dashboardPage, registerUser, loginUser, logoutUser, addBlogPage, viewBlogPage, addBlogUser, deleteBlogUser, editBlogUser, updateBlogUser } = require('../controllers/AuthController');

const {checkUserLogin} = require('../middleware/checkUser')

const routes = express.Router();

// const multer = require('multer');

routes.get('/',loginPage) //null route
routes.post('/loginuser',loginUser) //login user
routes.get('/register',registerPage) //register user
routes.post('/registeruser',registerUser)//ahi vache middleware mukvu nahi
routes.get('/logoutuser',logoutUser) //logout
routes.get('/dashboard',checkUserLogin,dashboardPage) // dashboard page

// const st = multer.diskStorage({
//     destination : (req,res,cb) => {
//         cb(null , 'uploads');
//     },
//     filname: (req,res,cb) => {
//         cb(null,`${fileLoader.fieldname}-${Math.floor(Math.random()*100000)}`);
//     }
// })

// const fileUpload = multer({storage : st}).single('image');

// routes.post('/addbloguser',fileUpload,addBlogUser);
// routes.post('/updatebloguser',fileUpload,updateBlogUser)
// routes.get('/deleteuser',deleteBlogUser)
// routes.get('/editbloguser',editBlogUser)


module.exports = routes;    