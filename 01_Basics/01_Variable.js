const accountId = 144553
let accountEmail= "kjasfjdf@gmail.com"
var accountPassword = "jhdshfs1234"
accountCity = "jaipur"
let accountState; // this variable is declared but not defined so it will show undefined

// accountId = 8747 // not allowed

accountEmail = "hbsfh@gmail.com"
accountPassword = "853446776" 
accountCity = "delhi"

console.log(accountEmail);

// To display in tabular format // it also helps to display more than one variable

/*
Prefer not to use var keyword to declare variable
becouse it has function scope
let and const have block scope
*/

console.table({accountId, accountEmail, accountPassword, accountCity, accountState});
