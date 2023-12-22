let myFriends = ["Chandan", "Ashish", "Mukesh", "Lucky"];
let myName = ["Ashish", "Atul", "Pandey"];

const myarr = new Array(1, 2, 3, 4, 5); 

//=============================================================================================

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);

// console.log(myarr[0]);
// console.log(myarr[1]);
// console.log(myarr[2]);

// console.log(myFriends);
// console.log(myarr);

//============================================================================================

// Array methods

let naam = "ramanuj";

// myarr.push(6);
// myarr.push(`${naam}`);
// myFriends.push("Atul");
// myFriends.pop();

// myarr.unshift(9);
// myarr.shift();
// myFriends.shift();

// console.log(myarr.includes(5));
// console.log(myarr.includes(25));
// console.log(myarr.indexOf(3));


// console.log(myFriends);
// console.log(myarr);

//=========================================================================================


// const newArr = myarr.join();  //join for convert array to string
// console.log(myarr);
// console.log( newArr);
// console.log(typeof newArr);


//=============================================================================================


// slice, splice

// console.log("A ", myarr);

// const myn1 = myarr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myarr);


// const myn2 = myarr.splice(1, 3)
// console.log("C ", myarr);
// console.log(myn2);

//==============================================================================================

// myFriends.push(myName);

// console.log(myFriends);

// console.log(myFriends[3]);

// const AllName = myFriends.concat(myName, myarr);
// console.log(AllName);

// const AllName = [...myFriends, ...myName, ...myarr];
// console.log(AllName);

//==========================================================================================


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

//===========================================================================================


// console.log(Array.isArray("Atul"));
console.log(Array.from("Atul"));
// console.log(Array.from({name: "Atul"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

//===================================array completed===========================================