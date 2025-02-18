const express = require('express');

const { loginPage, registerPage, dashboardPage, registerUser, loginUser, logoutUser, addBlogPage, viewBlogPage, addBlogUser, deleteBlogUser, editBlogUser, updateBlogUser } = require('../controllers/AuthController');

// const {checkUserLogin} = require('../middleware/checkUser')

const routes = express.Router();

const multer = require('multer');

const passport = require('passport') //7



routes.get('/',loginPage) //null route
routes.post('/loginuser', /* 8 */ passport.authenticate('local',{failureRedirect:'/'}),loginUser) //login user
routes.get('/register',registerPage) //register user
routes.post('/registeruser',registerUser)//ahi vache middleware mukvu nahi
routes.get('/dashboard',passport.checkUserLogin,dashboardPage) // dashboard page


module.exports = routes;    