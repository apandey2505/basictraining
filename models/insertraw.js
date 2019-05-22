let rawmodel = require('../models/makejsonraw');

//function
exports.insertrawfunction = (req_body) => {
	let rawjson_constructor = rawmodel.makejsonrawfunction();
	var rawmodel_cons = new rawjson_constructor(req_body);
	rawmodel_cons.save((err, data) => {
		if (err) { 
			console.log(err)
		}
	});
}