var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

// controllers
let controllers  = require('../controllers/jsoncontroller');
let controller1  = require('../controllers/textcontroller');

// routing
let indexRouter = require('../routes/index');
let jsonRouter = require('../routes/jsonRoute');
let textRouter = require('../routes/textRoute');

// listening on server
var server = app.listen(3000,function() { 
  console.log("server is running");
});

//body parsing
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/', indexRouter);
app.post('/json', controllers.jsoncontrollerfunction);
app.use('/text', controller1.textcontrollerfunction);

