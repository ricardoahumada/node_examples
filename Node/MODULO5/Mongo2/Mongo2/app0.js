var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/clientes", function (err, db) {
    
    db.collection("Ranking2014").find({} , function (err, result) {
        console.log(result);
        db.close();
    });
});
//var mongoClient = new MongoClient(new Server('localhost', 27017));
//mongoClient.open(function (err, mongoClient) {
//    var db1 = mongoClient.db("clientes");
    
//    mongoClient.close();
//});