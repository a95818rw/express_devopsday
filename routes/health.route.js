var express = require('express');
var router = express.Router();

var controller = require('../controllers/health.controller');

/* Health check */
router.get('/', controller.health_check);

module.exports = router;
