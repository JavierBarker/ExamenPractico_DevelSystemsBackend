'use strict'
import mongoose from 'mongoose';

const PollSchema = mongoose.Schema({
    namePoll: {type: String, required: true},
    descriptionPoll: {type: String, required: true},
    fields: [{
        nameField: {type: String, required: true},
        titleField: {type: String, required: true},
        required: {type: Boolean, required: true},
        typeField: {type: String, required: true}
    }],
    idUser: {type: String, required: true}
});

export default mongoose.model('Poll', PollSchema);