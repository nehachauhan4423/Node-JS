const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'CategoryModel', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    image: { type: String }
});

module.exports = mongoose.model('Cart', CartSchema);
