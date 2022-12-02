var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroSchema = new Schema({
    id: {type: Number, required: true, max: 10},
    Tiempo: { type: Date}
});

module.exports = mongoose.model('Registro', RegistroSchema);
