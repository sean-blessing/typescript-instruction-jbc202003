var readlineSync = require('readline-sync');
let heyStr = "Hey there!!";
console.log(heyStr);
let aName: string = readlineSync.question("name?");
console.log("name = "+aName);