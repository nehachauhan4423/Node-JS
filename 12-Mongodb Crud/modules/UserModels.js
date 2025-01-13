const mongoose = require('mongodb');
const { models } = require('mongoose');
const { type } = require('os');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
    useremail: {
        type: String,
        required:true,
    },
    userpassword: {
        type: String,
        required:true,
    }
})

const u = mongoose.model("user",userSchema);
models.exports = u