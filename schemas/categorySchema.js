var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var CategorySchema = new Schema({
	created_at : {type : Date, required : true},
	category : {type : String, required : true},
    name : {type : String, required : true}
});
module.exports = CategorySchema;