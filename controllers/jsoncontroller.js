var express = require('express');
var router = express.Router();
let services  = require('../services/calculation');

//json controllers
exports.jsoncontrollerfunction = (req, res) => {
  services.calculationfunction(req.body);
  res.end();
}