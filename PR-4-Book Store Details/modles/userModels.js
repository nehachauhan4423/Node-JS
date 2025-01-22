const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userdescription: {
        type: String,
        required: true,
    },
    userprice: {
        type: String,
        required: true
    },
    usergender: {
        type: String,
        required: true
    },
    userauthor:{
        type: String,
        required: true
    }
})
const users = mongoose.model("user", userSchema);
module.exports = users;