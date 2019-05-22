var express = require('express');
var router = express.Router();
let controllers  = require('../controllers/jsoncontroller');

/* GET users listing. */
router.post('/json', controllers.jsoncontrollerfunction);
module.exports = router;