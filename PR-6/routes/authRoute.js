const express = require('express');

const { loginPage, registerPage, dashboardPage, aboutPage, productPage, registerUser, loginUser, logoutUser } = require('../controllers/AuthController');

const {checkUserLogin} = require('../middleware/checkUser')

const routes = express.Router();

routes.get('/',loginPage)
routes.post('/loginuser',loginUser)
routes.get('/register',registerPage)
routes.post('/registeruser',registerUser)//ahi vache middleware mukvu nahi
routes.get('/logoutuser',logoutUser)
routes.get('/dashboard',checkUserLogin,dashboardPage)
routes.get('/about',checkUserLogin,aboutPage)
routes.get('/product',checkUserLogin,productPage)

module.exports = routes;    