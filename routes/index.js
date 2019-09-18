var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController.js')
const addController = require('../controllers/addController.js')
const loginController = require('../controllers/loginController.js')
const logoutController = require('../controllers/logoutController.js')

/* GET home page. */
router.get('/home', homeController.home)

/* ADD PRODUCTS*/
router.get('/add', addController.add)
router.post('/add', addController.addProducts)

/*USER LOGIN*/
router.get('/login', loginController.showInputs)
router.post('/login', loginController.login)

/*USER LOGOUT*/
router.get('/logout', logoutController.logout)

module.exports = router;
