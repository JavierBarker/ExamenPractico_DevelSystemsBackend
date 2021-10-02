'use strict'

import jwt from 'jwt-simple';
import moment from 'moment';
var secret = 'DevelSystems@12345'

export default class Token{

    static createToken(user){
        var payload ={
            sub: user._id,
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            iat: moment().unix(),
            exp: moment().day(10,'days').unix()
        }
    
        return jwt.encode(payload,secret)
    
    }
}