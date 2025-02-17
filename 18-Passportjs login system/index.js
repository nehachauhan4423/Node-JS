const express = require('express');

const port = 8040;

const app = express();

app.set('view engine','ejs');

const path = require('path');

const db = require('./config/database')

app.use(express.urlencoded());

//login system start 
const passport = require('passport'); //1
const passportLocal = require('./config/passportLocal') //2
const session = require('express-session');
app.use(session({ //4
name : 'passport',
secret : 'loginsystem',
saveUninitialized : true,
resave : true,
cookie : {
    maxAge : 1000 * 60 * 60 * 24
}
}))

app.use(passport.initialize()) //5
app.use(passport.session()) //6
app.use(passport.setUser); //18
//login system end 


app.use('/',require('./routes/indexRoute'));

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start is port :- ${port}`);
})