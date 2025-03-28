const Users = require('../models/Model');

const registerPage = (req,res) => {
    return res.render('register');
}

const loginPage = (req, res) => {
        return res.redirect('/dashboard')
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email });

        if (!user || user.password != password) {
            console.log('PLEASE ENTER VALID PASS & EMAIL');
            return res.redirect('/');
        }
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
    return res.render('dashboard');
}


// const logoutUser = (req, res) => {
//     res.clearCookie('auth');
//     return res.redirect('/')
// }


module.exports = {
    registerPage,
    loginPage,
    loginUser,
    registerUser,
    dashboardPage,
    // logoutUser,
}