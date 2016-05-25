var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ImageSchema = new Schema({
	created_at : {type : Date, required : true},
	url : {type : String, required : true},
    description : String
});
module.exports = ImageSchema;