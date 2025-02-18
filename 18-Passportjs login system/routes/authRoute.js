const express = require('express');

const routes = express.Router();

const {loginPage, loginUser, registerPage, registerUser, dashboardPage} = require('../controllers/AuthController');

const passport = require('passport')


routes.get('/',loginPage)
routes.post('/loginuser', /* 8 */ passport.authenticate('local',{failureRedirect:'/'}),loginUser)
routes.get('/register',registerPage)
routes.post('/registeruser',registerUser)
routes.get('/dashboard',passport.checkUser,dashboardPage)
// routes.get('/logoutuser',passport.checkUser,logoutUser)

module.exports = routes;