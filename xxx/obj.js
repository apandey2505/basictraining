
exports.rawdatacalculation = function(data) {
	let keys = Object.keys(data);
	let values = Object.values(data);
	let order_number = values[0];
	let number_of_items = values[1].length;
	let items = values[1];
	let name_of_item_arr = [];
	let category_of_item_arr = [];
	let quantity_of_item_arr = [];
	let price_of_item_arr = [];
	let imported_status_arr = [];
	let desc_arr = [];
	let imported_present = 0;

	//for loop to iterate through items
	for (i = 0; i < number_of_items; i++) {
		let name_of_item = items[i].name;
		name_of_item_arr.push(name_of_item);
		let category_of_item = items[i].category;
		category_of_item_arr.push(category_of_item);
		let quantity_of_item = items[i].quantity;
		quantity_of_item_arr.push(quantity_of_item );
		let price_of_item = items[i].price;
		price_of_item_arr.push(price_of_item);

		//console.log(items[i]);
		let keys_of_items = Object.keys(items[i]);
		//console.log(keys_of_items);

		for (k = 0; k< keys_of_items.length; k++ ){
			if (keys_of_items[k] == 'imported'){
				imported_present = 1;
			}
		}

		if (imported_present == 1) {
			let imported_status = items[i].imported;
			imported_status_arr.push(imported_status);
			let desc = `${quantity_of_item} imported ${name_of_item} at ${price_of_item}` ;
			desc_arr.push(desc);
		}

		else {
		let desc = `${quantity_of_item} ${name_of_item} at ${price_of_item}` ;
		desc_arr.push(desc);
		}
	}
	return(JSON.stringify(desc_arr));
}


