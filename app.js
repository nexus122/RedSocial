'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar rutas
var user_routes = require('./routes/user'); 
//Ruta que hace referencia a las rutas, que hacen referenia al controlador que hace referencia al modelo

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors

// Rutas
app.use('/api', user_routes)
// Exportar
module.exports = app;
