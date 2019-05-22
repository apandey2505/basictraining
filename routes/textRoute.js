var express = require('express');
var router = express.Router();
let controllers  = require('../controllers/textcontroller');

/* GET users listing. */
router.post('/text', controllers.textcontrollerfunction);
module.exports = router;