const UserModel = require('../models/UserModel');
//nodemailer add krvanu baki che
const loginPage = (req,res) => {
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const registerPage = (req,res) => {
    return res.render('register');
}

const dashboardPage = (req,res) => {
    return res.render('dashboard');
}

const registerUser = async (req,res) => {
    try{
        const {name,email,password,cpassword} = req.body;
        if (password == cpassword) {
            let user = await UserModel.create({
                name : name,
                email : email,
                password : password
            })
            console.log("USER REGISTER");
            return res.redirect('/');
        } else{
            console.log("PASSWORD AND CONFIG PASSWORD NOT MATCH");
            return res.redirect('/register');
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const loginUser = async(req,res) => {
    try{
        return res.redirect('/dashboard');
    }catch(err){
        console.log(err);
        return false;
    }
}

// const logoutUser = (req,res) => {
//     req.logout((err)=> {
//         if (err) {
//             console.log(err);
//             return false;
//         }
//         return res.redirect('/');
//     })
// }



module.exports = {
    loginPage,
    registerPage,
    dashboardPage,
    registerUser,
    loginUser
}