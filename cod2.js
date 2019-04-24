function calculateFrequency(mystr) {
  
    
    var lower = mystr.toLowerCase();
    var upper = mystr.toUpperCase();
    
    var result = "";
        for(var i=0; i<lower.length; ++i) 
        {
            if(lower[i] != upper[i] || lower[i].trim() === '')
                result += mystr[i];
        }
    
    
    mystr= result;
    
    var find = ' ';
    var re = new RegExp(find, 'g');
    mystr = mystr.replace(re, '');


    //console.log(mystr);
    
    var res = mystr.match(/./g);
    lenofres = mystr.length;
    //console.log(res);
    //console.log(lenofres);

    word = res ;
    
    ascii = []; // ascii array
    var ascii_value = 0;
    //console.log(ascii)
    fchar=[];
    fcount=[];
    for (i=0; i<lenofres ; i++)

    {  char = res[i];
        //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+char);
        //var count =0;
        //console.log(count);

        ascii_value =char.charCodeAt(0);
        //console.log(ascii_value);
        //console.log(ascii);
        
        var count =0;
        var signal =0;
        
        


        
        {   for (k=0 ;k<ascii.length;k++)

            
            {

                if (char.charCodeAt(0) == ascii[k])
                {
                    signal = signal +1;
                    //console.log("value of char where it has gone in zone    " + "##"+char+ "##");
                //console.log("entered the zone ///////value of k =" +k );
                break;
                }
            } 
        }  

        {
               j=0;
            while(j<=(lenofres-1 ) && signal==0)
            {

                if (word[j] == char )
                {
                    //console.log("entered the loop coz letter found for j=  "+j);
                    //console.log("^^^^^^^^^count value " + count);
                    //console.log(" char :::: "+ char);
                    count= count +1;
                    
                    //console.log("final value of count" + count );
                }
                j++;
                //console.log("value of j= " + j);

            } ascii.push(ascii_value);


        }
            
        //console.log("final char****** "+ char + "***** its count***"+count+"***");
        //console.log("loop ends-----------------------from here new value of char ");
        
        if(signal==0)
        {
            fchar.push(char);
            fcount.push(count);
        }      

     
           
         
        
         
        
    


    
    }

     //console.log(fchar);
     //console.log(fcount);


     arr1= fchar;
     arr2= fcount;
     
     obj= {};
     
     for(i=0 ; i< arr1.length ; i++)
     {
     
     
     property = arr1[i];
     value= arr2[i];
     obj[property]= value;
     
     }
     
     
     
     return (obj);
     

    
    


}
