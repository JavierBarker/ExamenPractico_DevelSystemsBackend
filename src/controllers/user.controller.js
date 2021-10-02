'use strict'
import User from '../models/user.model.js';
import bcrypt from 'bcrypt-nodejs'
import jwt from '../services/jwt.js';
export default class UserController{

    static async createAdmin(){
        const userAdmin = await User.find({ $or:[{ username: 'Admin' }]});
        if (userAdmin && userAdmin.length >= 1){
            return console.log('El usuario Admin ya existe');
        }else{
            bcrypt.hash('123456', null, null, (err, passwordEncripted) =>{
                
                User.create({ name: 'Admin', lastname: 'Admin', username: 'Admin', password: passwordEncripted});
            });
        }
    }
    

    static async login(req, res, next){
        try {
            const params = req.body;
            const serchUser = await User.findOne({ username: params.username});
            if(serchUser){
                bcrypt.compare(params.password, serchUser.password, (err, passCorrect)=>{
                    if (passCorrect) { 
                        if (params.getToken === true) {
                            return res.status(200).send({
                                token: jwt.createToken(serchUser),
                                userFound: serchUser
                            })
                        }else{
                            serchUser.password = undefined;
                            return res.status(200).send({serchUser});
                        }
                    }else{
                        return res.status(500).send({message: 'El Usuario no se ha podido identificar', err});
                    }
                })
            }else{
                return res.status(500).send({message: 'El usuario no se ha podido ingresar'});
            }
            
            next();
        } catch (error) {
            return res.status(500).send({message: error});
        }
    }
}