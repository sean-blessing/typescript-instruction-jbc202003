var readlineSync = require('readline-sync');
let heyStr = "Welcome to the readline demo app!!!";
console.log(heyStr);
console.log("made a change");
let aName: string = readlineSync.question("name?");
console.log("name = "+aName);
console.log("Bye!");