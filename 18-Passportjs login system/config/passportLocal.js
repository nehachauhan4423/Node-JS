const passport = require('passport');//10

const passportLocal = require('passport-local');

const {UserModel} = require('../models/Model') //11

//12
passport.use(new passportLocal({
    'usernameField' : 'email'
},async(email,password,done)=>{
    try{
        let user = await UserModel.findOne({email : email});
        if (!user || user.password != password) {
            console.log("PLS EMAIL & PASS VALID");
            return done(null,false)
        }
        return done(null,user);
    } catch(err) {
        console.log(err);
        return done(null,err)
    }
}))

//13
passport.serializeUser((user,done)=> {
    return done(null,user.id)
})

//14
passport.deserializeUser(async(id,done)=> {
    try{
        let user = await UserModel.findById(id)
        return done(null,user)
    } catch(err) {
        console.log(err);
        return done(null,err)
    }
})

//15 cutsome middleware
passport.checkUser = (req,res,next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }
}

//17
passport.setUser = (req,res,next) => {
    if (req.isAuthenticated()) {
        //record save in session variable
        res.locals.users = req.user;
    }
    return next()
}
module.exports = passport;