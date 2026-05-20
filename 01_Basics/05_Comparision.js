console.log(2>1) // output: true

console.log(2>=1) // output: true
console.log(2<1) // output: false
console.log(2<=1) // output: false
console.log(2==1) // output: false
console.log(2!=1) // output: true

console.log("2">1) // output: true
console.log("02">1) // output: true, here string is converted to number and then compared.

console.log("2">"12") // output: true, here both string is converted to number and then compared.

console.log(null>0) // output: false
console.log(null==0) // output: false
console.log(null>=0) // output: true

console.log(undefined == 0) // output: false
console.log(undefined==0) // output: false
console.log(undefined>=0) // output: false

/***********Strict Operator or Tripple Equal to**********/

//=== This operator is used to compare the value and data type of the variable or value. It is also called strict equality operator.

console.log(2===2) // output: true
console.log(2==="2") // output: false, here we are comparing number and string, so it will return false because data type is different.

console.log("2"===2) // output: false, here we are comparing string and number, so it will return false because data type is different.
