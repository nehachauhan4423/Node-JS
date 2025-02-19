const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, dashboardPage, registerUser, loginUser } = require('../controller/AuthController');

const passport = require('passport')


routes.get('/',loginPage)
routes.get('/register',registerPage)
routes.get('/dashboard',dashboardPage)
routes.post('/registeruser',registerUser)
routes.post('/loginuser',loginUser)



module.exports = routes;

