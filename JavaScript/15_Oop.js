const user = {
  username: "atul_91",
  isLogedIn: false,
  signCount: 11,
  getUserDetail: function () {
    console.log("Got user details from database");

    // console.log(`Username: ${username}`); // use this keyword for current context
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetail());

// console.log(this);// output {} empty object

//====================================================================================

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

// const userOne =  User("atul_91", 12, false);
// const userTwo =  User("chandan", 13, false);
// console.log(userOne);

const userOne = new User("atul_91", 12, false);
const userTwo = new User("chandan", 13, false);
console.log(userOne);
console.log(userTwo);

