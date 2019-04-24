
function unflatten(obj) {
  
  
    var result = {}, temp, substrings, property, i;
    for (property in obj) {
        substrings = property.split('.');
        //console.log("substring = " + substrings);
        temp = result;
        //console.log(temp);
        for (i = 0; i < substrings.length - 1; i++) {
            
            //console.log("value of i =  " + i );



            if (!(substrings[i] in temp))
             {
                //console.log("---substrings[i] = " + substrings[i]);

                if (isFinite(substrings[i + 1])) { // check if the next key is
                    //console.log("::::::::::::::::::::::::::::::::::1st loop" );

                    temp[substrings[i]] = []; 
                    //console.log( temp[substrings[i]]);   // an index of an array
                } else {
                    //console.log("2nd else  loop" );

                    temp[substrings[i]] = {};
                    //console.log( temp[substrings[i]]);       // or a key of an object
                }
            }
            //console.log("***");
            temp = temp[substrings[i]];
        }
        //console.log("///////");
        temp[substrings[substrings.length - 1]] = obj[property];
    }
    return result;
  
  // Write your code here
}
