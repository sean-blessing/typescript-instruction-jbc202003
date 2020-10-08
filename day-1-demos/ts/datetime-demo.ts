var readlineSync = require('readline-sync');
console.log("Prompt user for a date...");
let date = readlineSync.prompt({prompt: '[$<localeDate>]> '});
console.log("date = "+date);
console.log('[$<localeDate>]');