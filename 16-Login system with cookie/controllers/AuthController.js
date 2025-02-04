const Users = require('../models/UseModel');

const registerPage = (req,res) => {
    res.render('register');
}

const loginPage = (req,res) => {
    res.render('login')
}

const registerUser = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        await Users.create({
            name:name,
            email:email,
            password:password
        })
        console.log('USER REGISTER');
        res.redirect('/');
    }catch(err) {
        console.log(err);
        return false
    }
}


const dashboardPage = (req,res) => {
    return res.render('dashboard')
}
const productPage = (req,res) => {
    return res.render('product')
}
const aboutPage = (req,res) => {
    return res.render('about')
}

module.exports = {
    registerPage,
    loginPage,
    dashboardPage,
    registerUser,
    productPage,
    aboutPage
}