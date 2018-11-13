var express = require('express');
var app = express();

const hbs = require('hbs');
//helpers: funcion que se dispara cuando el template lo
require('./hbs/helpers');


app.use( express.static( __dirname + '/public'));

//EXPRESS HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine','hbs');


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
 
  res.render('home');
});

app.get('/empresa', (req, res) => {
 
  res.render('empresa');
});

/*app.get('/data', (req, res) => {
  res.send('Hola data')
});*/
 
app.listen(port, ()=>{
	console.log(`Escuchando Peticiones en el puerto ${port}`);
});