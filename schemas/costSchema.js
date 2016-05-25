var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CostSchema = new Schema({
	created_at : {type : Date, required : true},
	cost : {type : Number, required : true},
    name : {type : String, required : true}
});
module.exports = CostSchema;