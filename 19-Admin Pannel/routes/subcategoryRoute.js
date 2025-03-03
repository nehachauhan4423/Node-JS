const express = require('express');
const routes = express.Router();

const { addsubCategorypage, insertSubcategory, viewsubCategorypage, deleteSubctaegory, editSubcategory, changeStatus } = require('../controller/SubController')

routes.get('/', viewsubCategorypage)
routes.get('/addsubcategorypage', addsubCategorypage)
routes.post('/insertsubcategory', insertSubcategory)
routes.get('/deletesubctaegory',deleteSubctaegory)
routes.get('/editsubcategory',editSubcategory)
routes.get('/changestatus',changeStatus)
module.exports = routes;