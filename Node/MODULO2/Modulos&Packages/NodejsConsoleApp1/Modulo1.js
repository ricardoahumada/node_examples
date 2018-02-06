 // Contenido de Modulo1.js

 // Exportando un par clave/valor
module.exports = {
    valor: 123
};

// Exportando una función
module.exports = function () {
    return { ValorObjeto: 123 };
};

// Técnica de exportación múltiple
var x = function () {
    console.log('Llamada a x');
};
var y = function () {
    console.log('Llamada a y');
};
module.exports = {
    a: x,
    b: y
};

// Exportación múltiple abreviada
module.exports.a = function () {
    console.log('Llamada a a');
};
module.exports.b = function () {
    console.log('Llamada a b');
};
// O, mejor todavía: el "alias" exports 
exports.a = function () {
    console.log('Llamada a a');
};


