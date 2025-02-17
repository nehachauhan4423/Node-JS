const express = require('express');

const routes = express.Router();

const {loginPage, loginUser, registerPage, registerUser, dashboardPage, logoutUser} = require('../controllers/AuthController');

const passport = require('passport')


routes.get('/',loginPage)
routes.get('/loginuser', /* 8 */ passport.authenticate('local',{failureRedirect:'/'}),loginUser)
routes.get('/register',registerPage)
routes.get('/registeruser',registerUser)
routes.get('/dashboard',passport.checkUser,dashboardPage)
routes.get('/logoutuser',passport.checkUser,logoutUser)

module.exports = routes;