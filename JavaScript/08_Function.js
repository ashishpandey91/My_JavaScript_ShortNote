// function MyName() {
//   console.log("A");
//   console.log("T");
//   console.log("U");
//   console.log("T");
// }

// MyName()

// const atlu_pandey = function(num){
//   console.log(num);
//   }

//   atlu_pandey(4)



//function AddTwoNumber(num1, num2){
//  console.log(num1 + num2);
//}


//AddTwoNumber(3, 2)
//AddTwoNumber(3, "2")
//AddTwoNumber(3, "A")

//====================================================================================================

function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5)

console.log(result);

//======================================================================================================

function loginUserMessage(username = "") {
  if (username === undefined) {
    console.log("PLease enter a username");
    return
  }
  return `${username} just logged in`
}

console.log(loginUserMessage("atul"));

function loginUserMessage(username = "sam") {
  if (!username) {
    //console.log("PLease enter a username");
    return
  }
  return `${username} just logged in`
}

const abc = loginUserMessage()

console.log(abc);

//========================================================================================================

//function Calculat(...NewNumber){
//return NewNumber
//}

// function Calculat(val1, val2, ...NewNumber){
//   return (NewNumber, val1, val2)
//   }

//console.log(Calculat(100, 200, 300, 400));


//============================================================================================================


//const user = {
//userName: "atul91",
//password: 1234
//}

//function handleObject(anyObject){
//console.log(anyObject.userName, anyObject.password);
//}

//handleObject(user)

//handleObject({
//userName: "atul91",
//password: 1234
//})

//==============================================================================================================

//let myArray = [100, 200, 300, 400]

function handleArray(anyArray) {
  return anyArray[0]
}

//console.log(handleArray(myArray));

//console.log(handleArray([111, 222, 333, 444]));


//==============================================================================================================

// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//   // named IIFE
//   console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//   console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

//===============================function declataion==========================================


// function one () {
//   console.log(100);
// }

// one()

// const two = function() {
//   console.log(99);
// }

// two()

// const three = () => {

//   console.log(98);

// }

// three();


// Immediately Invoked Function Expressions (IIFE)


// (function four(){
//   // named IIFE
//   console.log(97);
// })();

// ( (five) => {
//   console.log(five);
// } )(96)


