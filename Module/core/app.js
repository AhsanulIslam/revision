const fs = require('fs');  //build in module

fs.writeFileSync('data.txt', 'Types of Modules in Node JS- > Core modules >Local/custom Modules > Third-Party Modules.');


console.log('Done~!!') 


// var data = fs.readFileSync('data.txt');    //read data
// console.log(data.toString());