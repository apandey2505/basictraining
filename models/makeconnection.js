const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mydb = 'mongodb://localhost/spider';

//connecting with mongoose
mongoose.connect( mydb, {
	useNewUrlParser : true , function(error) {
		if (error) {
		console.log(error);
		} 
		else {
		console.log("conncted to data base");
		}
	}
});

module.exports={
	Schema
};
