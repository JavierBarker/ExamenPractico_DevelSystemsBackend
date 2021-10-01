'use strict'

//Variables Globales
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userController from './src/controllers/user.controller.js';
import connectDB from './app.js';

const app = express();
//IMPORTACION DE RUTAS


//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//CABECERAS
app.use(cors());


connectDB();

//Exportar
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor en el puerto 3000');
    userController.createAdmin();
});