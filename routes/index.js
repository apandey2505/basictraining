var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send("welcome to sales tax cal");
});
module.exports = router;