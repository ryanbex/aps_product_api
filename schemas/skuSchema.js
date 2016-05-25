var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var SkuSchema = new Schema({
	created_at : {type : Date, required : true},
	sku : {type : Number, required : true},
    name : {type : String, required : true}
});
module.exports = SkuSchema;