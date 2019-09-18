const loginService = require('../services/loginService')

let self = {}


self.showInputs = function(req, res, next) {
  res.render('login', { data: self.showInputs})
}

//USER LOGIN
self.login = function(req, res, next) {
  
 const userData = loginService.check(req.body) 
 if (userData == true) {
  res.json({login: true}); 

} else if (userData == false) {
  res.json({login: false});
}
}

module.exports = self;  

