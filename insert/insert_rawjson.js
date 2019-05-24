let raw_json_model = require("../models/").jsonraw_DataBase;

exports.insertrawjsonfunction = (a,b) => {
    raw_json_model.create({
    order_number :a,
    order_details: b
}).then(() => console.log("raw_json inserted"));
}