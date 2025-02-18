const express = require('express');

const port = 8060;

const app = express();

app.set('view engine', 'ejs');

const db = require('./config/database');

//login system start
const passport = require('passport'); //1
const passportLocal = require('./config/passportLocal'); //2
const session = require('express-session'); //3
app.use(session({ //4
    secret: 'rnw4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize()); //5

app.use(passport.session()); //6

app.use(passport.setUser); //18

app.use(express.urlencoded());

// app.use('/', require('./routes/BlogRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server start :- ${port}`);
})