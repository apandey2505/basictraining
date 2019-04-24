
function flatten(ob) {
  
    var p = xxxx(ob);
  //var q =  JSON.stringify(p);
  return p;
  
  
  
  
   function xxxx(ob) 
  {
  
      
                  var toReturn = {};
                  var myreturn= {};
      
      //console.log("object >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+ ob);
  
                          for (var i in ob) {
                              //console.log(ob);
                              //console.log(">>>>property name  (means i)                                      i = "+ i);
                              //console.log("*****type of object******                                     "+ typeof ob[i]);
                              //console.log("value of property  (means i) = "+obj['i']);
                              //console.log("has own property ??"+ob.hasOwnProperty(i));
                              if (!ob.hasOwnProperty(i)) continue; // to let the 
  
                              if ((typeof ob[i]) == 'object' && ob[i] !== null) {
                                  //console.log(" --------------type of object  "+ typeof ob[i]);
                                  //console.log(" ++++++++++++"+ob[i]);
                                  var flatObject = xxxx(ob[i]);
                                  //console.log(flatObject);
                                  //console.log("entered 2nd loop");
                                  //console.log("value of i now "+ob[i]);
                                  for (var x in flatObject) {
                                      if (!flatObject.hasOwnProperty(x)) continue;
  
                                      toReturn[i + '.' + x]  = flatObject[x];
                                  }
                              } else {
                                  toReturn[i] = ob[i];
                                  //console.log("//////////////////////////////////////////////"+ob[i]);
                                  //console.log("@@@@@@@@@@@@"+toReturn);
                              }
                          }
  
     return toReturn;
  
  }
  }
  