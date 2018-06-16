const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const readFileP1 = readFile('file1.txt', 'UTF-8');
const readFileP2 = readFile('file2.txt', 'UTF-8');
const readFileP3 = readFile('file3.txt', 'UTF-8');
const readFileP4 = readFile('file4.txt', 'UTF-8');
const filesConcat = readFileP1 + " " + readFileP2 + " " + readFileP3 + " " + readFileP4;
const arrayOfWords = filesConcat.toLowerCase().split(/[^a-zA-Z0-9]/).filter(s => s.length > 0);
var count  = []
arrayOfWords.forEach(function(i) {
    count[i] = (count[i] || 0) + 1;        //create a new object elements in count varible  
  });
  
console.log(count);
const end = new Date();  // End time of the program
console.log("Execution time is : ", (end - start));