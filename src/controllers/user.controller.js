'use strict'
import User from '../models/user.model.js';
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jwt-simple';
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
    

}