let res_json_model = require("../models/").jsonres_DataBase;

exports.insertresjsonfunction = (a,b) => {
res_json_model.create({
    order_number :a,
    sales_details: b
}).then(() => console.log("res_json inserted"));
}