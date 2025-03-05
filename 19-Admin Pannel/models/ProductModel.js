const mongoose = require('mongoose');

const ProductcategorySchema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
    },
    exsubcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'exsubcategory'
    },
    productcategory : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : 'active'
    }
})

const productcategory = mongoose.model('productcategory',ProductcategorySchema);
module.exports = productcategory;