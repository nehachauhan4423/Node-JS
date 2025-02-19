const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const UserModel = require('../models/UserModel');

passport.use(new passportLocal({
    'usernameField': 'email'
}, async (email, password, done) => {
    try {
        let user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log("EMAIL & PASS NOT VALID");
            return done(null, false)
        }
        return done(null, user)
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        let user = await UserModel.findById(id);
        return done(null, user)
    } catch (err) {
        console.log(err);
        return (null, false);
    }
})

passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    return next();
}

passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user;
    }
    return  next();
}

module.exports = passport;