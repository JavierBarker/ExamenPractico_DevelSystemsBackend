'use strict'

//Variables Globales
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userController from './src/controllers/user.controller.js';
import connectDB from './app.js';
import user_route from './src/routes/user.route.js';
import poll_route from './src/routes/poll.route.js';
import result_route from './src/routes/result.route.js';

const app = express();
//IMPORTACION DE RUTAS


//MIDDLEWARES
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//CABECERAS
app.use(cors());


connectDB();

app.use('/api', user_route);
app.use('/api', poll_route);
app.use('/api', result_route);

//Exportar
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor en el puerto 3000');
    userController.createAdmin();
});