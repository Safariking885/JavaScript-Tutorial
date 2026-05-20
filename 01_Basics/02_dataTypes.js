"use strict"; // Treat all JavaScript code as modern and secure

// alert("3 + 3"); // we are using node js so alert will not work, it work only in browser.

console.log(3 + 3); //code readability that should be high.

//********************** Data Types in JavaScript **********************//
let name = "Safwan"; // String data type
let score = 100; // Number data type
let isLoggedIn = false; // Boolean data type
let outsideTemp = null; // Null data type
let userEmail; // Undefined data type
let isloggedIn = true; // boolean data type

// 1. number => 2 to power 53
// bigint => larger than 2 to power 53
// string => sequence of characters
// boolean => true or false
// null => standalone value that means nothing
// undefined => variable that is declared but not defined
// symbol => unique identifiers

// object => key value pairs
let person = {
  name: "Safwan",
  age: 22,
};

// typeof operator => it is used to find the data type of a variable or value
console.log(typeof "safwan"); // output in string
console.log(typeof 22); // output in number
console.log(typeof true); // output in boolean
console.log(typeof undefined); // output in undefined
console.log(typeof null); // output in object (this is a bug in js also) Interview Question