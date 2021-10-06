'use strict'

import express from 'express';
import resultController from '../controllers/result.controller.js';
import md_autentication from '../middlewares/authenticated.js'

var api = express.Router();

api.post('/addResult/:idPoll', resultController.addResult);
api.get('/getResultsByPoll/:idPoll', md_autentication.ensureAuth, resultController.getResultsByPoll)
export default api;