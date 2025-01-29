const express = require('express');

const routes = express.Router();

routes.get('/',(req,res)=>{
    console.log("ROUTES IS RUNNING");
})

routes.use('/crud',require('./crudRoute'));
routes.use('/product',require('./productRoute'))
routes.use('/blog',require('./blogRoute'));
routes.use('/about',require('./aboutRoute'))


module.exports = routes;