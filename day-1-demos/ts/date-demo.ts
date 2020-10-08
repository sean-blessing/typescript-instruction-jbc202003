var readline = require('readline-sync');
console.log("Date Demo App");

let year: number = readline.questionInt("Birth Year (YYYY)? ");
let month: number = readline.questionInt("Birth Month (MM)? ");
let day: number = readline.questionInt("Birth Day (DD)? ");

let birthDate: Date = new Date(year+"-"+month+"-"+day);

console.log("birthDate",birthDate);
console.log("birthdate formatted as mm/dd/yyyy");
let dateString: string = (birthDate.getMonth()+1) + "/" + birthDate.getDate() +
                         "/" + birthDate.getFullYear();
console.log(dateString);