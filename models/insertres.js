let resmodel = require('../models/makejsonres');

//making function
exports.insertresfunction = (myobject) => {
	//using model to make constructor    
	let resjson_constructor = resmodel.makejsonresfunction();
	var resmodel_cons = new resjson_constructor(myobject);
	//saving the data
	resmodel_cons.save((err, data) => {
		if (err) {
				console.log(err);
				}
	});
}