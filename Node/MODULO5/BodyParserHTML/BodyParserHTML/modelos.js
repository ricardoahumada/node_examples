var mongoose = require('mongoose');

module.exports.Persona = mongoose.model('Persona', {
    nombre: String,
    edad: Number,
    retirado: Boolean
});

