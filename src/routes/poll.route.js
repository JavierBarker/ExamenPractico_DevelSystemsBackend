'use strict'

import express from 'express';
import pollController from '../controllers/poll.controller.js';
import md_autentication from '../middlewares/authenticated.js'

var api = express.Router();

api.post('/addPoll', md_autentication.ensureAuth ,pollController.addPoll);
api.get('/getPollsUser', md_autentication.ensureAuth, pollController.getPollsUser);
api.get('/getPollById/:idPoll', pollController.getPollById);
api.put('/editPollById/:idPoll', md_autentication.ensureAuth, pollController.editPollById)
api.delete('/deletePollById/:idPoll', md_autentication.ensureAuth, pollController.deletePollById);
export default api;