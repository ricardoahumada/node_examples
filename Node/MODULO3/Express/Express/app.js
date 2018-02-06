var  express  =  require('express');
var  app  =  express();

//app.get('/', function  (req, res)  {
//        res.json({ message: 'Mensaje desde el api Express' });
//});

app.get('/', function (req, res) {
    res.sendfile('./Index.html');
});


app.get('/otromensaje', function  (req, res)  {
        res.json({ message: 'Este Mensaje se envía desde otra ruta' });
});

app.get('/texto', function  (req, res)  {
        res.send('Este Mensaje es solo texto');
});

app.get('/AcercaDe', function (req, res) {
    res.sendfile('./acercade.html');
});
app.get('/otrosdatos', function (req, res) {
    res.json({ message: 'Esto son otros datos' });
});


app.listen(process.env.PORT  ||  9000);
