'use strict'
import Result from '../models/result.model.js';
export default class ResultController{

    static async addResult(req, res){
        try {
            const params = req.body;
            var resultModel = new Result(params);
            resultModel.idPoll = req.params.idPoll;
            const addResult = await resultModel.save();
            return res.status(200).send({addResult});
        } catch (error) {
            return res.status(500).send({messageT: error});
        }
    }

    static async getResultsByPoll(req, res){
        try {
            const serchResultsByPoll = await Result.find({idPoll: req.params.idPoll});
            return res.status(200).send(serchResultsByPoll);
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }
    
}