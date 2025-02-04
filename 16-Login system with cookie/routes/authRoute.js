const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, dashboardPage, aboutPage, productPage, registerUser } = require('../controllers/AuthController');


routes.get('/',loginPage)
routes.get('/register',registerPage)
routes.get('/registeruser',registerUser)
routes.get('/dashboard',dashboardPage)
routes.get('/about',aboutPage)
routes.get('/product',productPage)

module.exports = routes;