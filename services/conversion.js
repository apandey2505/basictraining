
exports.converter = (x) => {
  var res = x.split("\n");
  let orderId= res[0];
  let remove_character = (str_to_remove, str) => {
    let reg = new RegExp(str_to_remove)
    return str.replace(reg,'')
    }
  orderId = remove_character(' ', orderId);
  orderId = remove_character(':', orderId);
  orderId = remove_character(' ', orderId);
  
  //object size
  Object.objsize = (Myobj) => {
    var osize = 0, key;
    for (key in Myobj) {
      if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
    };
  
  let objsize = Object.objsize(res);

  //data object
  items = [];   
  var data = {
    "name": orderId,
    "items": items
    }

  // loop to iterate in every line
  for (k = 1; k < objsize; k++) {
    str = res[k];
    let word = ['book', 'music CD', 'chocolate bar', 'bottle of perfume', 'packet of headache pills','chocolates'];
    for (i =0 ; i < word.length; i++) {
      let item_index = str.search(word[i]);
      let item_present_status = 0;
      if ( item_index != -1) {
        item_present_status = 1;
      }
      if (item_present_status == 1) {
        let name_of_item ="";

        //name of item
        if (word[i] != 'chocolates') {
          name_of_item = word[i];
        }

        else {
          name_of_item = 'box of chocolates';
        }

        //category
        category_obj = {
          "book": "book",
          "music CD": " music",
          "chocolate bar": "food",
          "bottle of perfume":"perfume",
          "packet of headache pills": "medical",
          "box of chocolates":"food",
        }
        let category = category_obj[name_of_item];

        //qunatity
        let quantity = parseInt(str.charAt(0));    

        //price of item
        let index_of_at = str.search(" at");
        let price_of_item = parseFloat(str.slice((index_of_at + 4 ), (index_of_at+ 9)));    

        //imported
        let imported_index = str.search("imported");
        let imported_status = false;
        if (imported_index != -1) {
          imported_status = true;      
        }

        if (imported_status == false) {
          element = { 
          "name": name_of_item,
          "category": category,
          "quantity": quantity,
          "price": price_of_item,
          }         
        }

        else {
          element = { 
            "name": name_of_item,
            "category": category,
            "quantity": quantity,
            "price": price_of_item,
            "imported":true
            }         
        }
        items.push(element);
      }
    }
  }
  
  return(data);
}
    