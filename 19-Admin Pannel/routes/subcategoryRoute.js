const express = require('express');
const routes = express.Router();

const { addsubCategorypage, insertSubcategory, viewsubCategorypage } = require('../controller/SubController')

routes.get('/', viewsubCategorypage)
routes.get('/addsubcategorypage', addsubCategorypage)
routes.post('/insertsubcategory', insertSubcategory)


module.exports = routes;