const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    img: String,
    chosen: Boolean,
    people: String
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;