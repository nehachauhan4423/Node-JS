const express = require('express');

const routes = express.Router();

routes.get('/',(req,res)=>{
    console.log("hello routes");
})


routes.use('/crud',require('./crudRoute'));

module.exports = routes;