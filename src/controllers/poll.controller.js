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
    
    static async getPollById(req, res){
        try {
            const serchPollById = await Poll.findById(req.params.idPoll);
            return res.status(200).send(serchPollById);
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }

    static async editPollById(req, res){
        try {
            const params = req.body;
            const editPoll = await Poll.findByIdAndUpdate(req.params.idPoll, params, {new: true, useFindAndModify: false})
            return res.status(200).send({editPoll});
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }

    static async deletePollById(req, res){
        try {
            const deletePoll = await Poll.findByIdAndDelete(req.params.idPoll);
            return res.status(200).send(deletePoll);
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }
    
}