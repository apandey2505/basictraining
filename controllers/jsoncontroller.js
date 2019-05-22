var express = require('express');
var router = express.Router();
let services  = require('../services/calculation');
let makejsonraw = require('../models/makejsonraw');
let makejsonres = require('../models/makejsonres');
let salescalobj = require('../services/salescalobj');
let salescalobjprint = require('../services/salescalobjprint');
let insertraw = require('../models/insertraw');
let insertres = require('../models/insertres');

//json controllers
exports.jsoncontrollerfunction = (req, res) => {
  //inserting the raw data into database
  insertraw.insertrawfunction(req.body);

  //calculating the sales tax
  let sales_obj = salescalobj.salescalobjfunction(req.body);
  salescalobjprint.salescalobjprintfunction(sales_obj);
  
  // inserting the calculated sales tax into database
  insertres.insertresfunction(sales_obj);
  res.send(sales_obj);
  res.end();
}





