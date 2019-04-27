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
    
var res = mystr.match(/./g);
lenofres = mystr.length;
   
word = res ;
ascii = []; 
var ascii_value = 0;
 
fchar=[];
fcount=[];
 for (i=0; i<lenofres ; i++)
{  char = res[i];
        ascii_value =char.charCodeAt(0);
        var count =0;
        var signal =0;
        
    {   for (k=0 ;k<ascii.length;k++)
       {
       if (char.charCodeAt(0) == ascii[k])
        {
           signal = signal +1;
            break;
         }
       } 
    }  

   {
        j=0;
        while(j<=(lenofres-1 ) && signal==0)
        {

         if (word[j] == char )
         { count= count +1;}
          j++;
        } ascii.push(ascii_value);
    }
            
  
        
if(signal==0)
{
fchar.push(char);
fcount.push(count);
} 
        
}


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
