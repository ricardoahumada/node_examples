// Require
var fs = require('fs');

// Lectura síncrona
var contents = fs.readFileSync('package.json').toString();
console.log(contents);

// Lectura asíncrona
fs.readFile('package.json', function (err, buf) {
    console.log(buf.toString());
});

// Comprobación de existencia
fs.exists('contrarelojistas.json', function (existe) {
    if (existe) {
        fs.readFile('contrarelojistas.json', function (err, buf) {
            console.log(buf.toString());
        });
    }
});

// Borrado de archivos
fs.unlink('FicheroABorrar.txt', function (err) {
    if (err) throw err;
    console.log('Archivo FicheroABorrar.txt borrado');
});

// Observación de cambios en un archivo
fs.watchFile('Mensaje.txt', function (actual, anterior) {
    console.log('La hora actual es: ' + actual.mtime);
    console.log('La hora anterior era: ' + anterior.mtime);
});



// Leer directorios
fs.readdir(".", function (err, files) {
    files.forEach(function (archivo) { console.log(archivo) });
});

// Escribir archivo
fs.writeFile('Mensaje.txt', 'Escrito desde Node', function (err) {
    if (err) throw err;
    console.log('Archivo grabado');
});

// Añadir a archivo existente
fs.appendFile('Mensaje.txt', '\nEsta línea se ha añadido después', function (err) {
    if (err) throw err;
    console.log('Los datos se han añadido al archivo');
});

// Estadísticas de archivo
fs.stat('./contraRelojistas.json', function (err, metadatos) {
    if (err) { throw err; }
    console.log(metadatos);
});

// Secuenciación de "callbacks"
fs.rename('/tmp/hello', '/tmp/world', function (err) {
    if (err) throw err;
    fs.stat('/tmp/world', function (err, stats) {
        if (err) throw err;
        console.log('stats: ' + JSON.stringify(stats));
    });
});