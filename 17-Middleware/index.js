const express = require('express');

const port = 8060;

const app = express();

app.set('view engine','ejs')

// create Custom middleware 

const checkAge = (req,res,next) => {
    let age = req.query.age;
    if (!age || age<18) {
        return res.redirect('/');
    }
    return next;
}

app.listen(port,(err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port :- ${port}`);
})