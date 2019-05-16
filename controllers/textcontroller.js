var express = require('express');
var router = express.Router();
let service1  = require('../services/conversion');
let services  = require('../services/calculation');

//text controller
exports.textcontrollerfunction = (req, res ,next) => {
   let xx =   service1.converter(req.body);
   console.log(services.calculationfunction(xx));
   res.end();    
}