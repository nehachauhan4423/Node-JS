const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category : {
            type : String,
            require : true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // Store image URL or file path
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }})

const category = mongoose.model('category',categorySchema);
module.exports = category;