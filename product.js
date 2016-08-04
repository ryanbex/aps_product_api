"use strict";
var valpak = require('./valpak_aps.json')
var ProductModel = require('./models/models');
var ProductSchema = require('./schemas/productSchema');

/* Product API
endpoints:
	insertMany: arg afile: loads products from json file
	drop: drops the Product collection
	cost: args sku: return the cost of the product
	costs: args sku: return all costs from all known distributors 
		and manufacturer of the product
	asin: args sku: return the asin for the product if exists
	asins: args sku: return all asins for the product
	upc: args sku: return the upc for the product if exists
	findByManufacturer: args manufacturer: return all products for `manufacturer`
	findByCost: args minPrice, maxPrice: return all products with
		cost between minPrice and maxPrice inclusive.
	findByManufacturerAndCost: args manufacturer, minPrice, maxPrice: 
		return all products for `manufacturer` between `minPrice` and max`Price` inclusive
	product: args sku: return product
*/
var Product = {
	/* TODO:
	insert product
	change prices
	change sku
	add skus
	add costs
	delete product

	Separate different user profiles: Admin, Basic
	*/
	insertMany : function(afile) {
		ProductModel.collection.insertMany(afile, function(err, result) {
			if (err) throw err;
			console.log('done');
		});
	},
	drop : function() {
		ProductModel.remove({}, function(err, result) {
			if (err) throw err;
			console.log('collection removed');
		});
	},
	cost : function(sku) {
		ProductModel.findOne({'sku':sku}, 'cost', function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	costs : function(sku) {
		ProductModel.findOne({'sku':sku}, 'costs', function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	asin : function(sku) {
		ProductModel.findOne({'sku':sku}, 'asin', function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	asins : function(sku) {
		ProductModel.findOne({'sku':sku}, 'asins', function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	upc : function(sku) {
		ProductModel.findOne({'sku':sku}, 'upc', function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	findByManufacturer : function(manufacturer) {
		ProductModel.find({'manufacturer':manufacturer}, function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	findByCost : function(minPrice, maxPrice) {
		ProductModel.find({'cost':{$gte:minPrice, $lte:maxPrice}}, 
			function(err, product) {
				if (err) throw err;
				console.log(product);
				return product;
			}
		);
	},
	findByManufacturerAndCost : function(manufacturer, minPrice, maxPrice) {
		ProductModel.find(
			{'manufacturer':{$regex:manufacturer}, 'cost':{$gte:minPrice, $lte:maxPrice}}, 
			'cost', function(err, product) {
				if (err) throw err;
				return product;
			}
		);
	},
	product : function(sku) {
		ProductModel.findOne({'sku':sku}, function(err, product) {
			if (err) throw err;
			console.log(product);
			return product;
		});
	},
	all : function(sku) {
		ProductModel.findOne({}, function(err, products) {
			if (err) throw err;
			return products;
		});
	}
};

module.exports = Product;
