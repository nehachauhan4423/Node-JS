const express = require('express');

const routes = express.Router();

const { loginPage, loginUser, registerPage, registerUser, dashboardPage } = require('../controllers/AuthCotroller');

const passport = require('passport');


routes.get('/',loginPage)
routes.post('/loginuser',/* 8 */ passport.authenticate('local',{failureRedirect:'/'}),loginUser)
routes.get('/register',registerPage)
routes.post('/registeruser',registerUser)
routes.get('/dashboard',passport.checkUser,dashboardPage);

module.exports = routes;