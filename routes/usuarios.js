var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController.js');

router.get('/', usuario.list);

router.get('/show/:id', usuario.show);

module.exports = router;
