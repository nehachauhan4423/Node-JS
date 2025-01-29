const express = require('express')

const port = 9070;

const app = express();

const db = require('./config/db')

const path = require('path');

app.set('view engine', 'ejs');

const UserModel = require('./models/UserModel')

app.use(express.urlencoded());

const multer = require('multer');

//file upload start //
const fs = require('fs')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


const st = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        let uniq = Math.floor(Math.random() * 100000);
        cb(null, `${uniq}-${file.originalname}`);
    }
});
const imageUpload = multer({ storage: st }).single('image');

//file upload end //

app.get('/', (req, res) => {
    return res.render('add');
})
app.post('/adduser', imageUpload, (req, res) => {
    const { name, email, password, gender, hobby, city } = req.body;
    console.log(`data add`);
    
    UserModel.create({
        username: name,
        usermail: email,
        userpassword: password,
        usergender: gender,
        userhobby: hobby,
        usercity: city,
        userimage: req.file?.path
    }).then((record) => {
        console.log(record);
        console.log("USER CREATED");
        return res.redirect('/viewuser');
    }).catch((err) => {
        console.log(err);
        return false;
    })
})
app.get('/viewuser', (req, res) => {
    UserModel.find({})
        .then((record) => {
            return res.render('view', {
                allrecord: record
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/deleteuser', (req, res) => {
    let id = req.query.did;
    UserModel.findById(id)
        .then((singlerow) => {
            fs.unlinkSync(singlerow?.image)
        }).catch((err) => {
            console.log(err);
            return false
        })
    UserModel.findByIdAndDelete(id)
        .then((data) => {
            console.log("RECORD DELTED");
            return res.redirect('/viewuser')
        }).catch((err) => {
            console.log(err);
            return false
        })
})
app.get('/edituser', (req, res) => {
    let id = req.query.eid;
    UserModel.findById(id)
        .then((single) => {
            return res.render('edit', {
                single
            })
        }).catch((err) => {
            console.log(err);
            return false
        })
})

app.post('/updateuser', imageUpload, (req, res) => {
    const { editid, name, email, password, gender, hobby, city } = req.body;
    if (req.file) {
        //old image remove
        UserModel.findById(editid)
            .then((singlerow) => {
                fs.unlinkSync(singlerow?.image)
                UserModel.findByIdAndUpdate(editid, {
                    username: name,
                    useremail: email,
                    userpassword: password,
                    usergender: gender,
                    userhobby: hobby,
                    usercity: city,
                    userimage: req.file?.path
                }).then((user)=>{
                    console.log('USER UPDATED');
                    return res.redirect('/viewuser');
                }).catch((err)=>{
                    console.log(err);
                    return false;
                })
            }).catch((err)=>{
                console.log(err);
                return false
            })
    }else{
        UserModel.findById(editid)
        .then((singlerow)=>{
            UserModel.findByIdAndUpdate(editid,{
                username: name,
                useremail: email,
                userpassword: password,
                usergender: gender,
                userhobby: hobby,
                usercity: city,
                userimage: singlerow?.image
            }).then((user)=>{
                console.log('USER UPDATED');
                return res.redirect('/viewuser')
            }).catch((err)=>{
                console.log(err);
                return false;
            })
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`server start on port -${port}`);
})