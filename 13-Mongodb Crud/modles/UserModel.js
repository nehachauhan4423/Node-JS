const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username :{
        type : String,
        require :true
    },
    usermail:{
        type : String,
        require :true
    },
    userpassword:{
        type : String,
        require :true
    },
    usergender:{
        type : String,
        require :true
    },
    userhobby:{
        type : String,
        require :true
    },
    usercity:{
        type : String,
        require :true
    },
    userimage:{
        type : String,
        require :true
    }
})
const users = mongoose.model('user',userSchema);
module.exports = users;