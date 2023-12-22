const accountId = 409798;
var accountPass = "Atul@123";
//Prefer not to use var because of issue in block scope and functional scope
let accountCity = "Hazaribagh";

console.log(accountId);
console.table([accountId, accountPass, accountCity]);
