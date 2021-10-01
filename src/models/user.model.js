'use strict'
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}

});

export default mongoose.model('Users', UserSchema);