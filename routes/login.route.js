var express = require('express');
var router = express.Router();

var controller = require('../controllers/login.controller');

router.get('/', controller.login);
router.get('/success', controller.success);

router.post('/confirm', controller.confirm);

module.exports = router;
