'use strict'
import mongoose from 'mongoose';

const ResultSchema = mongoose.Schema({
    idPoll: {type: String, required: true},
    fields: [{
        nameField: {type: String},
        titleField: {type: String},
        required: {type: Boolean},
        typeField: {type: String},
        responseText: {type: String},
        responseNumber: {type: Number},
        responseDate: {type: Date}
    }]
});

export default mongoose.model('Result', ResultSchema);