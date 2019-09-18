
let self = {};

const loginData = {
  name: "sofia",
  password: 2018
}

let checkValue = false;

self.addCheck = function() {
  return checkValue
}

self.logout = function() {
  checkValue = false
  return checkValue
}

//CHECK USER DATA
self.check = function(data) {

  if ((data.name == loginData.name) && (data.password == loginData.password)) {
    checkValue = true;
  } else {
    checkValue = false;
  }
  return checkValue
}

module.exports = self;
