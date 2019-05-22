const { Schema } = require('../models/makeconnection');
const mongoose = require('mongoose');

//making function
exports.makejsonresfunction = () => {
	var jsonSchema_res = new Schema({
		orderNo: String,
		desc: String,
		salestax: String,
		total: String
	});
let order_json_res = mongoose.model("order_json_res", jsonSchema_res);
return(order_json_res);
}