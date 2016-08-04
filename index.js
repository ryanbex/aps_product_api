'use strict';

var Product = require('./product');
var mongoose = require('mongoose');
const dbPath = process.env.DBPATH;
mongoose.connect(dbPath);


// AWS Lambda function to retrieve a product's ASIN
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const operation = event.operation;
    callback(Product.asin(event.sku));
};