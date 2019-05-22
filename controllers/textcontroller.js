var express = require('express');
var router = express.Router();
let service1  = require('../services/conversion');
let services  = require('../services/calculation');
let json_raw_ex = require('../controllers/jsoncontroller');
let insertraw = require('../models/insertraw');
let insertres = require('../models/insertres');
let salescalobj = require('../services/salescalobj');
let salescalobjprint = require('../services/salescalobjprint');

//text controller
exports.textcontrollerfunction = (req, res) => {
	//converting the text data into json 
	let xx =   service1.converter(req.body);

	//inserting the raw data(json) into database
	insertraw.insertrawfunction(xx);

	//calculating the sales tax
	let sales_obj = salescalobj.salescalobjfunction(xx);
	salescalobjprint.salescalobjprintfunction(sales_obj);

	//inserting the sales tax calculated into database
	insertres.insertresfunction(sales_obj);
	res.send(sales_obj);
	res.end();    
}