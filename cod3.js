
function flatten(ob) {
let p = xxxx(ob);
   return p;
   function xxxx(ob) {
      let toReturn = {};
      let myreturn = {};

      for (var i in ob) {
         if (!ob.hasOwnProperty(i))
            continue;  
         
         if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = xxxx(ob[i]);
            for (var x in flatObject) {
               if (!flatObject.hasOwnProperty(x))
                  continue;
            toReturn[i + '.' + x]  = flatObject[x];
            }
         }
         else {
         toReturn[i] = ob[i];
         }
      }
         
      return toReturn;
         
   }
}
 
