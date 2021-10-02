'use strict'

import express from 'express';
import userController from '../controllers/user.controller.js';
import md_autentication from '../middlewares/authenticated.js'

var api = express.Router();

api.post('/login',userController.login);

export default api;