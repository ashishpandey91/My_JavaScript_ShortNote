//singulton
//Object.create

//============================================================================================

//Object literals
const mySym = Symbol("key1");

const jsUser = {
    Name: "Ashish",
    "full name": "Ashish Kumar Pandey",
    [mySym]: "key1",
    age: 20,
    location: "Hazaribagh",
    email: "akp9@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    one: function () {
        console.log(99);
    }
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "atul@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email = "atul@microsoft.com";
//console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.location}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// console.log(jsUser.one());
// console.log(jsUser);

//=======================================================================================================


// const tinderUser = new Object();
const tinderUser = {

}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const fb_user = {
    name: "atul",
    userFullName: {
        firstName: "Ramesh",
        lastName: "Kumar"
    }
}


// console.log(fb_user);
// console.log(fb_user.userFullName);
// console.log(fb_user.userFullName.firstName);


//===================================================================================================

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2, obj4}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2 ,obj4);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

//===================================================================================================


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1]);
// users[1].email
// console.log(users[1].email);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// // Object.freeze(tinderUser);

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//=============================================================================================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
// console.log(instructor);

//=============================================================================================

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
