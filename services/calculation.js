

exports.calculationfunction = (data) => {
  let keysofdata = Object.keys(data);
  let valuesofdata = Object.values(data);
  let len_of_obj = Object.keys(valuesofdata[1]).length;
  let totalarray = [];
  let sales_array= [];
  var yarr = [];
  let amount_to_paid = 0;
  let totalsales = 0;

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
          name_of_item = ("imported "+ name_of_item);    
      }
    } 
  
    sales_tax = (final_price-price_of_item);
    sales_tax = round(sales_tax,2);
    var y = ` ${quantity_of_item} ${name_of_item} : ${final_price} `;
    yarr.push(y);
    sales_array.push(sales_tax);
    totalarray.push(final_price);
  }
  
  for (x = 0; x < sales_array.length; x++) {
    let y  = sales_array[x];
    totalsales = totalsales + y;
  }
  
  totalsales = round(totalsales, 2);
  
  for (x = 0; x < totalarray.length; x++) {
    let y  = totalarray[x];
    amount_to_paid = amount_to_paid + y;
  }

  //getting the yarr_print
  yarr_print = yarr.join('\r\n');
  
  //amount_to_paid rounding
  amount_to_paid = round(amount_to_paid, 2);
  let z = `Sales tax : ${totalsales}`;
  let w = `total : ${amount_to_paid}`;

  //making an object "obj"
  const obj = {
    orderNo: valuesofdata[0],
    desc :yarr_print,
    salestax : z,
    total: w
  }
  
  return(obj);
}