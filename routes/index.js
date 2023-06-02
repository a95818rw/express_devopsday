var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

/* GET home page. */
router.get('/', controller.getIndex);

module.exports = router;
