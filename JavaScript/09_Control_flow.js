// if (condition) {
    
// }

const temperature = 32;
const isUserLoggedIn = true;
const emailId = true;
const mobNo = false;

// <, >, <=, >=, ==, !=, ===, !==

// if (temperature < 40) {
//     console.log("temperature is less than 40 degree celsius");
// }

// if (temperature > 40) {
   
//     console.log("temperature is grater than 40 degree celsious");
// } else {
//     console.log("temperature is less than 40 degree celsius");
// }


// const balance = 1000

// if (balance < 100) {
//     console.log("is balance less than 100");
// } else if (balance < 500) {
//     console.log("is balance less than 500");
// } else if (balance <= 1000) {
//     console.log("is balance grater than 100");
// }


// if (isUserLoggedIn && emailId) {
//     console.log("Atul is logged in and also enter Email Id");
// }

// if (isUserLoggedIn || mobNo) {
//     console.log("user loggedIn");
// }

// =========================================================================================================================

// const months = 4;

// switch (months) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Jun");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;

//     default:
//         console.log("Resualt is not found");
//         break;
// }

// ================================================================================================

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")