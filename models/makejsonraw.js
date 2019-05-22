const { Schema } = require('../models/makeconnection');
const mongoose = require('mongoose');

//making function
exports.makejsonrawfunction = () => {
  var jsonSchema_raw = new Schema({
    "name": String,
    "items": [{
      name: String,
      category: String,
      quantity: Number,
      price: Number
    }]
  });
let order_json_raw = mongoose.model("order_json_raw", jsonSchema_raw);
return(order_json_raw);
}