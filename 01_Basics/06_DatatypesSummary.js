//1. Premitive datatypes 
//this Include : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100;
// const scorevalue = 100.3;
// const isloggedIn = false;
// const outsideTemp = null;
// const userEmail = "safwanansari@gmail.com";

const Id = Symbol('983');
const otherId = Symbol('983');

// console.log(typeof score)

console.log(Id===otherId); // Here we can see that both the symbol is not equal because they are unique in nature even if they have same description.

const bigNumber = 9007199254740991n; // this is a big int number and it is denoted by n at the end of the number.

console.log(typeof bigNumber) // output: bigint

//2. Non-primitive datatypes
// this include : Object, Array, Function

const person = {
    name: "Safwan",
    age: 22,
    isloggedIn: false,
}

const arr = [1,2,3,4,5]

function greet(){
    console.log("Hello World");
}

console.log(typeof person) // output: object
console.log(typeof arr) // output: object
console.log(typeof greet) // output: function

/*********** Memory **********/

//Stack: It works on the principle of LIFO (Last In First Out) and primitive datatypes are stored in stack memory and it is faster than heap memory.

//Heap: It works on the principle of storing non-primitive datatypes in heap memory and it is slower than stack memory.

let myYoutubeChannel = "Safwan Ansari"
let anotherChannel = myYoutubeChannel

console.log(myYoutubeChannel) // output: Safwan Ansari
console.log(anotherChannel) // output: Safwan Ansari

myYoutubeChannel = "Code with Safwan"

console.log(myYoutubeChannel) // output: Code with Safwan
console.log(anotherChannel) // output: Safwan Ansari, here we can see that another channel is not changed because it is stored in stack memory and it is a primitive datatype.

let user1 = {
    email: "safwanansari@gmail.com",
    Id: "Safwan@sk",
}

let user2 = user1
user2.email = "safariking@gmial.com"

console.log(user1.email) // output: { email: 'safariking@gmial.com' }
console.log(user2.email) // output: { email: 'safariking@gmial.com' }
