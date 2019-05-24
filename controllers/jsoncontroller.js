var express = require('express');
var router = express.Router();
let services  = require('../services/calculation');
let salescalobj = require('../services/salescalobj');
let salescalobjprint = require('../services/salescalobjprint');
let insertraw = require('../insert/insert_rawjson');
let insertres = require('../insert/insert_resjson');
let obj_to_string_raw = require('../xxx/obj');
let conversion = require('../services/conversion');

//json controllers
exports.jsoncontrollerfunction = (req, res) => {
  //inserting the raw data into database
  let obj_string_for_db = obj_to_string_raw.rawdatacalculation(req.body);
  let order_num = req.body.name;
  insertraw.insertrawjsonfunction(order_num,obj_string_for_db);

  //calculating the sales tax
  let sales_obj = salescalobj.salescalobjfunction(req.body);
  let val_sales_obj= Object.values(sales_obj);
  let data_res_final =   val_sales_obj[1] + "  " +val_sales_obj[2] +"  " + val_sales_obj[3];
  salescalobjprint.salescalobjprintfunction(sales_obj);
  let resjson_string = JSON.stringify(sales_obj);

  // inserting the calculated sales tax into database
  insertres.insertresjsonfunction(order_num, data_res_final);
  res.send(sales_obj);
  res.end();
}





