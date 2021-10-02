'use strict';

import jwt from 'jwt-simple'
import moment from 'moment';
var secret = 'DevelSystems@12345';

export default class md_autentication{
    static ensureAuth(req,res,next) {

        if(!req.headers.authorization){
            return res.status(401).send({mensaje: 'La peticion no tiene la cabezera de autorización'});
        }
    
        var token = req.headers.authorization.replace(/['"]+/g,'');
    
        try{
    
            var payload = jwt.decode(token,secret)
    
            if(payload.exp <= moment().unix()){
                return res.status(401).send({mensaje: 'El token ha expirado'});
            }
    
        }catch(error){
            return res.status(404).send({mensaje: 'El token no es valido'})
        }
        
        req.user = payload;
        next();
    
    }

}