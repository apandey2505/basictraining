var fs = require('fs');
arr = ['./file1.txt', './file2.txt','./file3.txt','./file4.txt','./file5.txt'];
var x= 0;
filepath = arr[x];
var val  = 0;
for (x= 0 ; x <5 ; x++)
{// defining a function
let readingcontent = function (filepath, callback){
  fs.readFile(filepath, "utf8",function(err, data){
  if(err){return console.log(err)};
  val = data;
  if (val!=0){
  callback(val);
}})}

readingcontent(arr[x], function(par){
console.log("---------------------");
console.log("---------------------");
console.log(par);
x= x+1;});
}



























/*



function doHomework(data, callback) {
console.log('---------------------------');
console.log('---------------------------');


callback();

}


fs.readFile(filepath, "utf8",function(err, data){
if (err) console.log("error");
else return data;
});



doHomework(fs.readFile, function() {
console.log( fs.readFile);
});
}
*/
