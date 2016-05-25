var mongoose = require('mongoose');
var ProductSchema = require('../schemas/productSchema');
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;