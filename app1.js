


exports.converter = function (x){
   
var res = x.split("<br/>");
let orderId= res[0];

function remove_character(str_to_remove, str) {
    let reg = new RegExp(str_to_remove)
    return str.replace(reg, '')
  }

orderId = remove_character(' ', orderId);  
items= [];

for (i = 1; i < res.length; i++) {
    let res_sp = res[i].split(" ");
   
    for (j = 0; j< res_sp.length; j++ ) {

        if(res_sp[j] == "book") {
            let name_book = "book";
            let category_book = "book";
            let quantity_book = parseInt(res_sp[1]);
            let index_book = res_sp.indexOf("book");
            let price_book = parseInt(res_sp[index_book + 2]); 
            var imported_status = 0;

            for (k = 0; k < res_sp.length; k++){
                if (res_sp[k] == "imported") {
                    imported_status = 1;
                }
            } 
                    if (imported_status == 0) {                     
                         element1 = { 
                            "name": name_book,
                            "category": category_book,
                            "quantity": quantity_book,
                            "price": price_book,
                        }
                        items.push(element1);   
                    }            
            

                    else if(imported_status == 1) {
                            element1 = { 
                            "name": name_book,
                            "category": category_book,
                            "quantity": quantity_book,
                            "price": price_book,
                            "imported": true
                        }
                        items.push(element1);
                    }
        }  
               

        else if (res_sp[j] == "music") {
            let name_music = "music CD";
            let category_music = "music";
            let quantity_music = parseInt(res_sp[1]);
            let index_music = res_sp.indexOf("music");
            let price_music = parseInt(res_sp[index_music + 3]); 
            var imported_status = 0;


            for (k = 0; k < res_sp.length; k++){
                if (res_sp[k] == "imported") {
                    imported_status = 1;
                }
            }

                if (imported_status==0) {
                    element2 = { 
                        "name": name_music,
                        "category": category_music,
                        "quantity": quantity_music,
                        "price": price_music,    
                    }
                    items.push(element2);
                }
            
                else if(imported_status==1) {
                    element2 = { 
                        "name": name_music,
                        "category": category_music,
                        "quantity": quantity_music,
                        "price": price_music,
                        "imported": true    
                    }
                    items.push(element2);          
                }
        }


        else if (res_sp[j]== "chocolate" ) {
            let name_choc = "chocolate bar";
            let category_choc = "food";
            let quantity_choc = parseInt(res_sp[1]);
            let index_choc = res_sp.indexOf("chocolate");
            let price_choc = parseInt(res_sp[index_choc + 3]); 
            var imported_status=0;

            for (k = 0; k < res_sp.length; k++){
                if (res_sp[k] == "imported") {
                    imported_status = 1;
                }
            }
            
                if (imported_status == 0) { 
                    element3 = { 
                        "name": name_choc,
                        "category": category_choc,
                        "quantity": quantity_choc,
                        "price": price_choc,    
                    }
                    items.push(element3);    
                }

                else if (imported_status == 1){
                    element3 = { 
                        "name": name_choc,
                        "category": category_choc,
                        "quantity": quantity_choc,
                        "price": price_choc,
                        "imported": true    
                    }
                    items.push(element3);
                }
        }


            else if (res_sp[j] == "chocolates" ) {
            let name_choc = "box of chocolates";
            let category_choc = "food";
            let quantity_choc = parseInt(res_sp[1]);
            let index_choc = res_sp.indexOf("chocolates");
            let price_choc = parseInt(res_sp[index_choc + 2]); 
            var imported_status=0;

            for (k=0; k < res_sp.length; k++){
                if (res_sp[k] == "imported") {
                    imported_status = 1;
                }

            }
            
            if (imported_status == 1){
                element4 = { 
                    "name": name_choc,
                    "category": category_choc,
                    "quantity": quantity_choc,
                    "price": price_choc,
                    "imported": true,
                }
                items.push(element4);
            }            
        }


        else if (res_sp[j] == "perfume" ) {
            
            let name_perfume = "bottle of perfume";
            let category_perfume = "perfume";
            let quantity_perfume = parseInt(res_sp[1]);
            let index_perfume = res_sp.indexOf("perfume");
            let price_perfume = parseInt(res_sp[index_perfume + 2]); 
            var imported_status = 0;

            for (k = 0; k < res_sp.length; k++){
                    if (res_sp[k] == "imported") {
                        imported_status = 1;
                    }
            }
                
                if (imported_status == 0) {                    
                    element5 = { 
                        "name": name_perfume,
                        "category": category_perfume,
                        "quantity": quantity_perfume,
                        "price": price_perfume,        
                    }
                    items.push(element5);
                }                            
        
                else if(imported_status == 1) {
                    element5 = { 
                        "name": name_perfume,
                        "category": category_perfume,
                        "quantity": quantity_perfume,
                        "price": price_perfume,
                        "imported": true,
                        }
                    items.push(element5);
                }
        }

        


        else if (res_sp[j] == "pills" ) {
            
            let name_pills = "pills";
            let category_pills = "medical";
            let quantity_pills = parseInt(res_sp[1]);
            let index_pills  = res_sp.indexOf("pills");
            let price_pills = parseInt(res_sp[index_pills + 2]); 
            var imported_status = 0;

            for (k=0; k < res_sp.length; k++){
                if (res_sp[k] == "imported") {
                    imported_status = 1;
                }
            }
                    if (imported_status == 0) {
                        element6 = { 
                            "name": name_pills,
                            "category": category_pills,
                            "quantity": quantity_pills,
                            "price": price_pills,    
                        }
                        items.push(element6);
                    }


                    else if(imported_status == 1) {
                        element6 = { 
                            "name": name_pills,
                            "category": category_pills,
                            "quantity": quantity_pills,
                            "price": price_pills,
                            "imported": true,    
                        }
                        items.push(element6);
                    }        
        }

            
        }
        


    }

var data = {
"name": orderId,
"items": items
}

return(data);

}











