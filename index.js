const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const readFileP1 = readFile('file1.txt', 'UTF-8');
const readFileP2 = readFile('file2.txt', 'UTF-8');
const readFileP3 = readFile('file3.txt', 'UTF-8');
const readFileP4 = readFile('file4.txt', 'UTF-8');

Promise.all([readFileP1, readFileP2,readFileP3,readFileP4]).then((data)=>{
console.log('all files are read');
console.log(data[0] + ' ' + data[1] + ' ' + data[2] + ' ' + data[3]);
const concatFiles = data.join(" ");
const arrayOfWords = concatFiles.toLowerCase().split(/[^a-zA-Z0-9]/).filter(s => s.length > 0);
var count  = []
arrayOfWords.forEach(function(i) { count[i] = (count[i]||0) + 1;});  //create a new object elements in count varible
    console.log(count);
    const end = new Date();
    console.log("Execution time is : ", (end - start));

}).catch(()=>{
console.log('error');
});

