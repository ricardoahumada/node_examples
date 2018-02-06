var modelo = require('../modelos.js');

module.exports.decirHola = function (req, res) {
    var nombre = req.body.nombre;
    res.send('¡Hola, ' + nombre + '!');
};

module.exports.crearPersona = function (req, res) {
    //var persona = new modelo.Persona( {
    //    nombre : "Monglorio",
    //    edad: 55,
    //    retirado: false
    //});
    var nombre = req.body.nombre;
    var edad = req.body.edad;
    var retirado = req.body.retirado;
    var persona = new modelo.Persona({
        nombre : nombre,
        edad: edad,
        retirado: retirado
    });

    persona.save(function (error) {
        if (error) { 
            res.send(500, error);
        } else {
            res.send(persona.nombre + " insertado en la BB.DD.");
        }
    });
};
