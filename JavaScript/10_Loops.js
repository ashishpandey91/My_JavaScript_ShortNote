//loops

// for

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }


// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value : ${j} Outer loop value : ${i}`);
        
//     }
    
// }


// for (let i = 1; i <= 10; i++) {
    
//     for (let j = 1; j < 10; j++) {

//             console.log(i + '*' + j + ' = ' + i*j );

//     }
    
// }

// let myArray = ["flash", "batman", "superman"];

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);    
// }



// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//    console.log(`Value of i is ${index}`);
    
// }

//=========================================================================================

// while and dowhile

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// myArray = [1, 2, 3, 4, 5]
// arr = 0

// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 1

// do {
//     console.log(`Score is ${score}`);
    // score++
// } while (score <= 10);

//======================================================================================================================

// for of

// ["", "", ""]
// [{}, {}, {}]

// const myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const num of myArry) {
//     console.log(num);
// }




// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

//======================================================================================================================


// Maps

// const mymap = new Map()
// mymap.set('IN', "India")
// mymap.set('USA', "United States of America")
// mymap.set('Fr', "France")
// mymap.set('IN', "India")


// console.log(mymap);

// for (const [key, value] of mymap) {
//     console.log(key, ':-', value);
// }

//==========================================================================================

// for in

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//==========================================================================================

//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNumers.forEach( (num) => {  console.log(num + 10);})



// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// for each me value return nhi hota h

// console.log(values);

//=====================================================================================

// filter

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let one = mynumbers.filter( (num1) => {
//     const a = num1 >= 4
//     return a
//    return num1 > 5
// } )

// console.log(one);

// const mynumbers1 = []

// mynumbers.forEach( (num) => {
//     if (num > 4) {
//         mynumbers1.push(num)
//     }
// } )

// console.log(mynumbers1);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myFavBook = books.filter( (one) => {return one.genre == "History" })

//   console.log(myFavBook);

  let myFavBook1 = books.filter( (one) => {return one.genre == "History" && one.edition == 1996} )

//   console.log(myFavBook);

  let myFavBook2 = books.filter( (one) => {return one.genre == "History" || one.edition == 1996} )

//   console.log(myFavBook);


//=================================================================================

// Map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// const newNums1 = myNumers.map( (num) => num + 10 )
// console.log(newNums1);

// console.log(newNums);

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)

// console.log(newNums);

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

//===================================================================================

//reduce

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

// const cartPrice = [
//     {
//         MobPrice: 10000,
//         Modle: "Y91"
//     },
//     {
//         MobPrice: 11000,
//         Modle: "Y92"
//     },
//     {
//         MobPrice: 12000,
//         Modle: "Y93"
//     },
//     {
//         MobPrice: 13000,
//         Modle: "Y94"
//     }
// ]

// const totalPrice = cartPrice.reduce( (acc, currVal) => {return acc + currVal.MobPrice},0 )
// const totalPrice = cartPrice.reduce( (acc, currVal) => {return acc + currVal.MobPrice},99 )

// console.log(totalPrice);