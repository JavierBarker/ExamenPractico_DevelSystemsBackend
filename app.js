'use strict'
import mongoose from 'mongoose';

function connectDB() {
    
    const URL = 'mongodb+srv://root:root@examenpractico-develsys.kwsmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    mongoose.Promise = global.Promise;
    mongoose.set( 'returnOriginal', false );
    mongoose.set( 'useFindAndModify', false );
    mongoose.set( 'useCreateIndex', true );
    mongoose.set( 'useNewUrlParser', true );
    mongoose.set( 'useUnifiedTopology', true );
    mongoose.connect( URL)
    .then(()=> console.log('se encuentra conectado a la base de datos'))
    .catch((err) => console.log(err));
    
}


export default connectDB;