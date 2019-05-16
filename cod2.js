function calculateFrequency (mystr) {
  let lower = mystr.toLowerCase();
  let upper = mystr.toUpperCase();     
  let result = '';
  for(let i=0; i<lower.length; ++i) {
    if(lower[i] != upper[i] || lower[i].trim() === '') {
      result += mystr[i];
    }
  }   
  mystr= result;    
  let find = ' ';
  let re = new RegExp(find, 'g');
  mystr = mystr.replace(re, '');
  let res = mystr.match(/./g);
  lenofres = mystr.length;
  word = res ;
  ascii = []; 
  var ascii_value = 0;
  
  fchar=[];
  fcount=[];

  for (let i = 0; i < lenofres; i++) {
    char = res[i];
    ascii_value = char.charCodeAt(0);
    let count = 0;
    let signal = 0;
          
    for (let k = 0; k < ascii.length; k++) {
      if (char.charCodeAt(0) == ascii[k]) {
          signal = signal + 1;
          break;
      } 
    } 

    let j = 0;
    while (j <= (lenofres-1) && signal == 0){
      if (word[j] == char )
        { count= count +1;}
          j++;
      } ascii.push(ascii_value);
    
                
    if (signal == 0 ) {
    fchar.push(char);
    fcount.push(count);
    } 
          
  }

  arr1 = fchar;
  arr2 = fcount;
  obj= {};
  
  for (i = 0; i< arr1.length; i++){
  property = arr1[i];
  value = arr2[i];
  obj[property] = value;
  }
  return (obj);

}



console.log(calculateFrequency("dummy text "));
