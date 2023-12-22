class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encriptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const accOne = new User("atul_123", "atui@yahoo.com", "123");
console.log(accOne);
console.log(accOne.encriptPassword());
console.log(accOne.changeUsername());

// behind the scene

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea@gmail.com", "456");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
