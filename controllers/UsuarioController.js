var mongoose = require('mongoose');
var Usuario = require("../models/Usuario");

var usuarioController = {};

usuarioController.list = function(req, res){
    
    Usuario.find({}).exec(function(err, usuarios){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/usuario/index', {usuarios: usuarios,titulo:'INDEX'} );
        
    });
    
};

usuarioController.show = function(req, res){
    Usuario.findOne({id: req.params.id}).exec(function(err, usuario){
        if( err ){ console.log('Error: ', err); return; }  
        res.render('../views/usuario/show', {usuario: usuario} );
    });
    
};

module.exports = usuarioController;