var mongoose = require('mongoose');
var CostSchema = require('./costSchema');
var CategorySchema = require('./categorySchema');
var SkuSchema = require('./skuSchema');
var ImageSchema = require('./imageSchema');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
	//created_at : {type : Date, required : true},
    //updated_at : [Date],
    // product identifiers
    sku : String,
    title : String,
    part_number : String,
    skus : [SkuSchema],
    asin : String,
    asins : [String],
    upc : String,
    oem : String,
    // general info
    manufacturer : String,
    original_manufacturer : String,
    title : String,
    description : String,
    country : String,
    // category identifiers
    type : String,
    product_type : String,
    pool_type : String,
    pool_or_spa : String,
    category : String,
    subcategory : String,
    tags : String,
    categories : [CategorySchema],
    instructions : String,
    warranty : String,
    // suburl, e.g. /<manufacturer>-<part_number>
    product_handle : String,
    //amazon, merchant, other
    fulfillment : String,
    // parent or related to product.
    // If is parent, then it's a parent of itself
    parent : String,
    parent_sku : String,
    parent_id : String,
    warranty : String,
    instructions : String,
    uom : {type : Number, min:1},
    // costs
    cost : {type : Number, min:0.00},
    costs : [CostSchema],
    list_price : Number,
    // availability
    available : Boolean,
    obsolete : Boolean,
    discontinued : Boolean,
    // measurements
    weight : String,
    weight_uom : String,
    height : String,
    height_uom : String,
    width : String,
    width_uom : String,
    length : String,
    length_uom : String,
    // images
    images : [ImageSchema]
});
// on every save, add the date
ProductSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  console.log(currentDate);
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
module.exports = ProductSchema
