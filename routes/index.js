var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');

/* GET home page. */
router.get('/', controller.getIndex);

/* Health check */
router.get('/health', controller.health_check);

module.exports = router;
