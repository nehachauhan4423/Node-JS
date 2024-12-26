const express = require('express')
const port = 5600;
const app = express();

app.set('view engine','js');

app.get('/',(req,res)=>{
    return res.render('home')
})

app.get('/pro',(req,res)=>{
    return res.render('products')
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})