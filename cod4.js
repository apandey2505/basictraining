
function unflatten(obj) {
  
  
var result = {}, temp, substrings, property, i;
for (property in obj) 
{
substrings = property.split('.');
temp = result;
for (i = 0; i < substrings.length - 1; i++)
{

 if (!(substrings[i] in temp))
{  if (isFinite(substrings[i + 1]))
    
    { temp[substrings[i]] = []; } 
   else { temp[substrings[i]] = {};}
}
temp = temp[substrings[i]];
}
        
temp[substrings[substrings.length - 1]] = obj[property];
}
return result;

}
