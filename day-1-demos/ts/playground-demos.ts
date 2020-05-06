let a: number = 5;
let b: number = 7;
var c: number = 10;
var d = 5;
console.log("product = " + (a * b));

let s1: string = "Hello";
let s2: string = "there";
alert(s1 + ", " + s2 + "!");
alert(`the value of s1 is ${s1}.`);

let s3: string = "there";
if (s2 == s3) alert('s1 and s3 are equal');
let s4: string = "5";

let success: boolean = false;

while (!success) {
    if (a == 5) {
        alert("in success loop");
        success = true;
    }
}

// practice using Arrays - p. 30
let ids: number[] = [2, 4, 6, 8, 10];
console.log("array of numbers=", ids);
// loop through the array, print # and sum
let sum: number = 0;
for (let idx: number = 0; idx < ids.length; idx++) {
    console.log("number[" + idx + "] = " + ids[idx]);
    sum += ids[idx];
    console.log("sum = " + sum);
    console.log("-------------------");
}

let students: string[] = ["Sam", "Marcus", "Trevor", "Sarah"];
// use a foreach loop to print
for (let student of students) {
    console.log(student);
}
// sort list and reprint
students.sort();
for (let student of students) {
    console.log(student);
}
let prices: Array<number> = [5.5, 10.99, 3.49];
for (let price of prices) {
    console.log(price);
}

// enums - p. 33
enum Color { Red=5, Blue, Green };
let col: Color = Color.Blue;
console.log(col);

// const - p. 39
const months: number = 12;
console.log("There are " + months + " months in a year");
