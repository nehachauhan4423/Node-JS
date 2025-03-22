const UserModel = require('../models/UserModel');

const nodemailer = require('nodemailer');

const loginPage = (req, res) => {
    if (res.locals?.users) {
        return res.redirect('/dashboard');
    }
    return res.render('login');
}

const registerPage = (req, res) => {
    return res.render('register');
}

const dashboardPage = (req, res) => {
    return res.render('dashboard');
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
            let user = await UserModel.create({
                name: name,
                email: email,
                password: password
            })
            
            console.log("USER REGISTER");
            return res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        return false;
    }

}

const loginUser = async (req, res) => {
    try {
        return res.redirect('/dashboard');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    })
}

const forgotPassword = async (req, res) => {
    try {
        const { useremail } = req.body;
        let user = await UserModel.findOne({ email: useremail });
        if (!user) {
            console.log("EMAIL AND PASS NOT VALID");
            return res.redirect('/');
        }
        let otp = Math.floor(Math.random() * 100000);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nehachauhan4423@gmail.com',
                pass: 'zwho upgs nmdw xkxc'
            }
        });

        var mailOptions = {
            from: 'nehachauhan4423@gmail.com',
            to: useremail,
            subject: 'Forgot Password',
            html: `<h1 style='color:green'>Your Otp :- ${otp}</h1>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                let userotp = {
                    otp: otp,
                    email: useremail
                }
                res.cookie('userotp', userotp)
                console.log('Email sent: ' + info.response);
                return res.redirect('/otp');
            }
        });
    } catch (err) {
        console.log(err);
        return false
    }
}

const otp = (req, res) => {
    return res.render('otp');
}
const postOtp = (req, res) => {
    let otp = req.body.otp;
    let userotp = req.cookies.userotp?.otp;
    if (otp == userotp) {
        return res.redirect('/newpassword')
    } else {
        console.log("OTP IS NOT MATCH");
        return res.redirect('/otp')
    }
}

const newPasswordPage = (req, res) => {
    return res.render('newpassword');
}

const postNewPassword = async (req, res) => {
    try {
        const { newpassword, cpassword } = req.body;
        if (newpassword == cpassword) {
            let useremail = req.cookies.userotp?.email;
            await UserModel.findOneAndUpdate({ email: useremail }, {
                password: newpassword
            })
            res.clearCookie('userotp');
            return res.redirect('/');
        } else {
            console.log("NEW PASS AND CONFIG PASS NOT VALID");
            return res.redirect('/newpassword')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    loginPage,
    registerPage,
    dashboardPage,
    registerUser,
    loginUser,
    logoutUser,
    forgotPassword,
    otp,
    postOtp,
    newPasswordPage,
    postNewPassword
}
