var fs = require('fs');
arr = ['./file1.txt', './file2.txt','./file3.txt','./file4.txt','./file5.txt'];

for (x=0 ; x<5 ; x++)

{

filepath = arr[x];

var callback  = function(err, data ){
  if (err) return console.log(err);
  console.log('---------------------------');
  console.log('---------------------------');
  console.log(data.toString());
}


fs.readFile(filepath , callback);

}