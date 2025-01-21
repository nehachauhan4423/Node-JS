const express = require('express')
const port = 8090;
const app = express();
const db = require('./config/db');
const path = require('path');
app.set('view engine','ejs')
const UserModel = require('./models/UserModels');

app.use(express.urlencoded());

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

app.get('/viewuser',(req,res)=>{
    UserModel.find({})
    .then((record)=>{
        return res.render('view',{
            record
        })
    }).catch((err)=>{
        console.log(err);
        return false
    })
})

app.get('/deleteuser',(req,res)=>{
    let id = req.query.deleteId;

    UserModel.findByIdAndDelete(id)
    .then((deleteData)=>{
        console.log("DELETE DATA");
        return res.redirect("/viewuser")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.get('/edituser',(req,res)=>{
    let id = req.query.editId;
    UserModel.findById(id)
    .then((single)=>{
        return res.render("edit",{
            single
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.post('/updateuser',(req,res)=>{
    const {editId,name,email,password} = req.body;

    UserModel.findByIdAndUpdate(editId,{
        userName : name,
        userEmail :email,
        userPassword :password
    }).then((editData)=>{
        console.log("DATA UPDATE");
        return res.redirect('/viewuser')
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