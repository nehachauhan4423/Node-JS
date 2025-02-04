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
    return next();
}
app.get('/',(req,res)=> {
    return res.render('index');
})
app.get('/product',checkAge,(req,res)=>{
    return res.render('product');
})
app.get('/about',checkAge,(req,res)=>{
    return res.render('about');
})
app.get('/contact',checkAge,(req,res)=>{
    return res.render('contact')
})


app.listen(port,(err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server start on port :- ${port}`);
})