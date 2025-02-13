const Users = require('../models/UserModel');

const registerPage = (req, res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
    if(req.cookies?.auth){
        return res.redirect('/dashboard')
    }
    return res.render('login');
}

const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await Users.findOne({email:email});

        if (!user || user.password != password) {
            console.log('PLEASE ENTER VALID PASS & EMAIL');
            return res.redirect('/');
        }
        res.cookie('auth',user);
        return res.redirect('/dashboard');
        } catch (err) {
            console.log(err);
            return false
        }
    
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await Users.create({
            name: name,
            email: email,
            password: password
        })
        console.log('USER REGISTER');
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

const productPage = (req, res) => {
    return res.render('product')
}

const aboutPage = (req, res) => {
    return res.render('about')
}

const logoutUser = (req,res) => {
    res.clearCookie('auth');
    return res.redirect('/')
}

module.exports = {
    registerPage,
    loginPage,
    dashboardPage,
    registerUser,
    productPage,
    aboutPage,
    logoutUser,
    loginUser
}


