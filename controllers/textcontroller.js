var express = require('express');
var router = express.Router();
let service1  = require('../services/conversion');
let services  = require('../services/calculation');
let json_raw_ex = require('../controllers/jsoncontroller');
let insertraw = require('../insert/insert_rawjson');
let insertres = require('../insert/insert_resjson');

let salescalobj = require('../services/salescalobj');
let salescalobjprint = require('../services/salescalobjprint');

//text controller
exports.textcontrollerfunction = (req, res) => {
	let str = req.body;
	let index_of_order = str.search("Order ");
	let order_num = str.slice((index_of_order + 6), (index_of_order+ 7));
	let order_name_str = `Order ${order_num}`;
	let order_details= str.slice((index_of_order + 8));
	
	//inserting the raw data(string) into database
	insertraw.insertrawjsonfunction(order_name_str,order_details);

	//converting the text data into json 
	let xx =   service1.converter(req.body);

	//calculating the sales tax
	let sales_obj = salescalobj.salescalobjfunction(xx);
	salescalobjprint.salescalobjprintfunction(sales_obj);

	//inserting the sales tax calculated into database
	let order_no_res = sales_obj.orderNo;
	let order_details_res = sales_obj.desc + " " + sales_obj.salestax + " "+ sales_obj.total;
	//let order_details_res = ` ${sales_obj.desc}  ${sales_obj.salestax}  ${sales_obj.total} `;
	insertres.insertresjsonfunction(order_no_res , order_details_res);

	res.send(sales_obj);
	res.end();    
}