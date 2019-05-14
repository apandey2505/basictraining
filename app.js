let y = "Order 2: <br/> 1 imported box of chocolates at 10.00 <br/> 1 imported bottle of perfume at 47.50";
let x = "Order 3: <br/> 1 imported bottle of perfume at 27.99 <br/> 1 bottle of perfume at 18.99 <br/> 1 packet of headache pills at 9.75 <br/> 1 box of imported chocolates at 11.25";
const object_from_other = require('./app3.js');
let converted = object_from_other.converter(x);
// use converter in case you have that text input, else if we have input in json object , we will put data is equal to that.

/*
var data = {
    "name": "order2",
    "items": [
        {
            "name": "box of chocolates",
            "category": "food",
            "quantity": 1,
            "price": 10,
            "imported": true
        },
        {
            "name": "bottle of perfume",
            "category": "perfume",
            "quantity": 1,
            "price": 47.50,
            "imported": true
        }
    ]
}
*/

let data = converted;
let keysofdata = Object.keys(data);
let valuesofdata = Object.values(data);
let len_of_obj = Object.keys(valuesofdata[1]).length;
let totalarray = [];
let sales_array= [];
let amount_to_paid = 0;
let totalsales = 0;
console.log(`${valuesofdata[0]} :`);
//round off fucntion
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}   

for (x = 0; x < len_of_obj; x++) {
  let final_price =0; 
  let sales_tax = 0;
  let items = valuesofdata[1][x];
  let name_of_item =  items["name"];
  let category_of_item = items["category"];
  let quantity_of_item = items["quantity"];
  let price_of_item = items["price"];
  let is_imported = items["imported"];
  
  if (category_of_item == 'book' || category_of_item == 'medical' ||category_of_item == 'food' ) {
    final_price = price_of_item;
      
    if (is_imported == true) {
      final_price = final_price*1.05;
      final_price= round(final_price,2);
      name_of_item = ("imported "+ name_of_item);
    }
  }

  else {
    final_price = price_of_item*1.10
    if (is_imported == true) {
        final_price = final_price*1.05;
        final_price= round(final_price,2);
        name_of_item = ("imported "+ name_of_item)    
    }
  } 

  sales_tax = (final_price-price_of_item);
  sales_tax = round(sales_tax,2);
  console.log(` ${quantity_of_item} ${name_of_item} : ${final_price} `);
  sales_array.push(sales_tax);
  totalarray.push(final_price);
}

for ( x = 0; x < sales_array.length; x++) {
  let y  = sales_array[x];
  totalsales = totalsales + y;
}

totalsales = round(totalsales, 2);

for (x = 0; x < totalarray.length; x++) {
  let y  = totalarray[x];
  amount_to_paid = amount_to_paid + y;
}

amount_to_paid = round(amount_to_paid, 2);
console.log(`Sales tax : ${totalsales}`);
console.log(`total : ${amount_to_paid}`);
