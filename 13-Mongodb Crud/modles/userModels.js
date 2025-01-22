const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true,
    },
    userpassword: {
        type: String,
        required: true
    },
    usergender: {
        type: String,
        required: true
    },
    userhobby: {
        type: String,
        required: true
    }
})
const users = mongoose.model("user", userSchema);
module.exports = users;