var mongoose = require('mongoose');
var Registro = require("../models/Registro");

var registroController = {};

registroController.list = function(req, res){
    
    Registro.find({}).sort({$natural:-1}).limit(1).exec(function(err, registros){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/registro/index', {registros: registros,titulo:'INDEX'} );
        
    });
    
};

module.exports = registroController;