var express = require('express');
var router = express.Router();

var registro = require('../controllers/RegistroController.js');

router.get('/', registro.list);

module.exports = router;
