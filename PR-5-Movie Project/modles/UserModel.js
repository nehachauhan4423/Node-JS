const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    discription: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },

    hobby: {
        type: Array,
        required: true
    },

    image: {
        type: String,
        required: true
    }

})
const users = mongoose.model("user", userSchema);

module.exports = users