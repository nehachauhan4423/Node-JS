const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }

})

const users = mongoose.model('loginuser',userSchema)

module.exports = {
    users
}