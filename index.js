'use strict'
/* Base de datos */

/* Importar las librerias*/
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;



/* Creamos una promesa*/
mongoose.Promise = global.Promise;

/* Mencionamos la base de datos a la que nos queremos conectar */
let bbdd = "curso_mean_social"; 

/* Hacemos la conexion con la base de datos*/
mongoose.connect('mongodb://localhost:27017/'+bbdd/*,{useMongoClient: true}*/)
    .then(()=>{
        console.log("La conexion a la base de datos "+bbdd+" se ha realizado con exito !");
        //Crear servidor
        app.listen(port,()=>{
            console.log("Servidor corriendo en http://localhost:",port);
        });
    })
    .catch(err => console.log("Error: ",err));

