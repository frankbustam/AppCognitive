var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    id:{type: Number},
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    departamento: { type: Number}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
