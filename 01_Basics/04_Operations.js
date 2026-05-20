let Value = 3
let negValue = -Value
console.log(negValue) // output: -3

let str = "Safwan"
let negStr = -str
console.log(negStr) // output: NaN Not a number

console.log(2+2) // output: 4
console.log(2-2) // output: 0
console.log(2*3) // output: 6
console.log(2**3) // output: 8 (2 to the power 3)
console.log(2/3) // output: 0.6666666666666666
console.log(2%3) // output: 2 (remainder of 2 divided by 3)

let str1 = "Hello"
let str2 = "Safwan"
let str3 = str1 + str2
console.log(str3); // output: Hello Safwan, In this we are concatenating two string.

let num1 = 2
let num2 = 3
let num3 = num1 + num2
console.log(num3) // output: 5, In this we are adding two number.

console.log("1" + 2) // output: "12", In this we are concatenating string and number, here number is converted to string and then concatenated.

console.log(1 + "2") // output: "12", In this we are concatenating number and string, here number is converted to string and then concatenated.

console.log("1" + 2 + 2) // output: "122", In this we are concatenating string and number, here number is converted to string and then concatenated.

console.log(1 + 2 + "2") // output: "32", In this we are adding number and number first then concatenating string, here number is added first then converted to string and then concatenated.

console.log(+true)
console.log(+" ")

let num1, num2, num3
num1=num2=num3=2+2

/*********** Prefix and Postfix Operator***********/
let counter = 0
console.log(counter) // output: 0
console.log(counter++) // output: 0, here we are using post fix operator, first it will return the value then it will increment the value.
console.log(counter) // output: 1

let counter1 = 0
console.log(counter1) // output: 0
console.log(++counter1) // output: 1, here we are using prefix operator, first it will increment the value then it will return the value.
console.log(counter1) // output: 1  