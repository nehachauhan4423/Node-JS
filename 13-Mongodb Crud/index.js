const express = require('express');

const port = 9060;

const app = express();

const db = require('./config/db')

const path = require('path');

app.set('view engine','ejs');

const userModel = require('./modles/userModels');

app.use(express.urlencoded());

const multer = require('multer');

//file upload start
const fs = require('fs');
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
const st = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,res,cb)=>{
        let uniq = Math.floor(Math.random()*100000);
        cb(null,`${file.filename}-${uniq}`)
    }
})
const imgeUpload = multer({storage:st}).single('image');
// file upload end 

app.get('/',(req,res)=>{
    return res.render('Add');
})



//add user
app.post('/adduser',(req,res)=>{
    const {name,email,password,gender,hobby} = req.body;
    userModel.create({
        username: name,
        useremail :email,
        userpassword :password,
        usergender :gender,
        userhobby :hobby
    }).then((record)=>{
        console.log(record);
        console.log("USER CREATE..!");
        return res.redirect('/')
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})


// view user
app.get('/viewuser',(req,res)=>{
    userModel.find({})
    .then((record)=>{
        return res.render('view',{
            record
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

//delete user
app.get('/deleteuser',(req,res)=>{
    let id = req.query.deleteId;
    userModel.findByIdAndDelete(id)
    .then((del)=>{
        console.log("DATA DELETE..!");
        return res.redirect("/viewuser")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

//edit user
app.get('/edituser',(req,res)=>{
    let id = req.query.editId;

    userModel.findById(id)
    .then((single)=>{
        return res.render('edit',{
            single
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

//update user
app.post('/updateuser',(req,res)=>{
    const {editId,name,email,password} = req.body;
    userModel.findByIdAndUpdate(editId,{
        username :name,
        useremail:email,
        userpassword: password,
    }).then((editdata)=>{
        console.log("DATA UPDATE..!");
        return res.redirect("/viewuser")
    }).catch((err)=>{
        console.log(err);
    })
})


app.listen(port,(err)=>{
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start on port ${port}`);
    
})