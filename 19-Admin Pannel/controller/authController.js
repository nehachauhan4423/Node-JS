const Users = require('../models/UserModel');

const fs = require('fs')

// registerPage
const registerPage = (req, res) => {
    return res.render('register');
}

// loginpage 
const loginPage = (req, res) => {
    // // return res.redirect('/dashboard')
    // return res.render('login');

    if(req.cookies?.auth){
        return res.redirect('/dashboard');
    }
    return res.render('login');

}

// loginuser 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log('PLEASE ENTER VALID PASS & EMAIL');
            return res.redirect('/');
        }
        // res.cookie('auth', user);
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false
    }

}

//register user 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await Users.users.create({
            name: name,
            email: email,
            password: password
        })
        console.log('USER REGISTER');
        console.log('name,email,password');
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

// dashboardpage 
const dashboardPage = (req, res) => {
    return res.render('dashboard')
}


// logoutuser 
const logoutUser = (req, res) => {
    // res.clearCookie('auth');
    return res.redirect('/')
}

// registerPage
const aboutPage = (req, res) => {
    return res.render('about');
}



module.exports = {
    registerPage,
    loginPage,
    dashboardPage,
    registerUser,
    logoutUser,
    loginUser,
    addBlogPage,
    addBlogUser,
    deleteBlogUser,
    editBlogUser,
    updateBlogUser,
    viewBlogPage,
    aboutPage
}


