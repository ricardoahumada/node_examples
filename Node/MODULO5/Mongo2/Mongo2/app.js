var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Inicializar la conexión
MongoClient.connect("mongodb://localhost:27017/clientes", function (err, database) {
    if (err) throw err;
    
    db = database;
    
    // Lanzar la aplicación una vez que la conexión
    // de datos esté lista.
    app.listen(3000);
    console.log("Escuchando en el puerto 3000");
});

// Recuperar los datos de una colección y sacarlos 
// en la consola de la aplicación
app.get("/", function (req, res) {
    db.collection("Ranking2014").find({}, function (err, docs) {
        docs.each(function (err, doc) {
            if (doc) {
                console.log(doc);
                res.json(doc, encoding = 'utf8');
            }
            //else {
            //    res.end();
            //}
        });
        res.end("fin de listado");
    });
});

//app.get("/listado", function (req, res) {
//    db.collection("Ranking2014").find({}, function (err, docs) {
//        //res.send(docs);
//        //res.end();
//        docs.each(function (err, doc) {
//            if (doc) {
//                res.send(doc);
//            }
//            else {
//                res.end();
//            }
//        });
//    });
//});