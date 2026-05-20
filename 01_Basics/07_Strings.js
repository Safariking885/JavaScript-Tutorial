const name = "Safwan Ansari";
const repocount = 1000;

console.log(name+repocount) // output: Safwan Ansari1000, here we are using + operator to concatenate the string and number, so it will return a string.

console.log(`Hello my name is ${name} and I have ${repocount} repositories`) // output: Hello my name is Safwan Ansari and I have 1000 repositories, here we are using template literals to concatenate the string and number, so it will return a string.;

const gamename = new String("Call of Duty")

console.log(gamename[0]) // output: C, here we are using index to access the first character of the string.

console.log(gamename__Proto__) // output: String, here we are using __Proto__ to access the prototype of the string.

console.log(gamename.length) // output: 11, here we are using length property to get the length of the string.

console.log(gamename.toUpperCase()) // output: CALL OF DUTY, here we are using toUpperCase() method to convert the string to uppercase.

console.log(gamename.toLowerCase()) // output: call of duty, here we are using toLowerCase() method to convert the string to lowercase.

console.log(gamename.includes("of")) // output: true, here we are using includes() method to check if the string contains the word "of" or not.

console.log(gamename.charAt(2)) // output: l, here we are using charAt() method to get the character at the specified index.

console.log(gamename.indexOf("o")) // output: 1, here we are using indexOf() method to get the index of the first occurrence of the specified character.

const gamename = new String("Call of Duty")

const newString = gamename.substring(0,4)
console.log(newString) // output: Call, here we are using substring() method to get the substring of the string from index 0 to index 4 (excluding index 4) and this not give the negetive index.

const newString = gamename.slice(-4,2)
console.log(newString) // output: Call, here we are using slice() method to get the substring of the string from index -4 to index 2 (excluding index 2) and this can give the negetive index.

const newStringone="    Safwan   Ansari    "
console.log(newStringone) // output: "    Safwan   Ansari    ",
console.log(newStringone.trim()) // output: "Safwan Ansari", here we are using trim() method to remove the whitespace from both sides of the string.
const url="https://safwan.com/safwan%20ansari"
console.log(url.replace("%20","-")) // output: "https://safwan.com/safwan-ansari", here we are using replace() method to replace the specified character with the new character.

const url="https://safwan.com/safwan%20ansari"
console.log(url.replaceAll("%20","-")) // output: "https://safwan.com/safwan-ansari", here we are using replaceAll() method to replace all the occurrences of the specified character with the new character.

console.log(url.includes("safwan")) // output: true, here we are using includes() method to check if the string contains the word "safwan" or not.

console.log(gamename.split('-')) // output: ["Call", "of", "Duty"], here we are using split() method to split the string into an array of substrings based on the specified separator.