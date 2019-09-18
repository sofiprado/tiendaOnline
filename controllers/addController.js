const imgService = require('../services/imgService')
const loginService = require('../services/loginService')

let self = {}

self.add = function(req, res) {
  let checkUser = loginService.addCheck()
  if (checkUser == true) {
  res.render('add', { data: self.add})
  } else if (checkUser == false) {
    res.sendStatus(440)
  }
};

self.addProducts = function(req, res) {
  const img = imgService.add(req.body) 
 // console.log('addProducts', img)
  res.json(img)
};

module.exports = self;