const express = require('express')
const port = 8090;
const app = express();
const db = require('./config/db')
const path = require('path');
app.set('view engine','ejs')
const UserModel = require('./modules/UserModels')

app.use(express.urlencoded())

app.get('/',(req,res)=>{
    return res.render('form');
})

app.post('/adduser',(req,res)=>{
    const {name,email,password} = req.body;
    UserModel.create({
        usename:name,
        useemail:email,
        usepassword:password
    }).then((record)=>{
        console.log(record);
        console.log("USER CREATE");
        return res.redirect('/');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port :- ${port}`);
    
})