'use strict'
import Poll from '../models/poll.model.js';
export default class PollController{

    static async addPoll(req, res){
        try {
            if(req.user){
                const params = req.body;
                var pollModel = new Poll(params); 
                pollModel.idUser = req.user.sub;
                const addPoll = await pollModel.save();
                return res.status(200).send({addPoll});
            }else{
                return res.status(500).send({message: 'No posee los permisos para realizar esta acción'});
            }
        } catch (error) {
            return res.status(500).send({messageT: error});
        }
    }

    static async getPollsUser(req, res){
        try {
            const serchPollsUser = await Poll.find({idUser: req.user.sub});
            return res.status(200).send(serchPollsUser);
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }
    

    
}