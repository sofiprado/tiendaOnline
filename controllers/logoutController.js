const loginService = require('../services/loginService')

let self = {}

self.logout = function(req, res, next) {
  let exit = loginService.logout()
  res.json(exit)
}

module.exports = self;