var mongoose = require('mongoose');
var valpak = require('./valpak_aps.json')
var Product = require('./models/models');
var ProductSchema = require('./schemas/productSchema');

mongoose.connect('mongodb://ryanDev:p8r8g0n@ds011913.mlab.com:11913/allpoolspa/catalog');

var conn = mongoose.connection;

// create a new Product
console.log(conn);
Product.collection.insertMany(valpak, function(err, response) {
	if (err) {
		console.log(err);
		throw err;
	}
	console.log('done')
});