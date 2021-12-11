//console.log("Harsh's Project");

//console.log(global);

//const os = require('os');

 //console.log(os);

 const fs = require('fs');

 fs.writeFile('./file1.txt', 'Hello Harsh', () => {});

 fs.readFile('./file1.txt', (err, data) => {
     if (err) {
         console.log(err);
     }
     console.log(data.toString());
 });