const mongoose = require('mongoose');

const userDetails = new mongoose.Schema({

    task: {
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    }
}
);

const TODO = mongoose.model('TODO', userDetails );
module.exports = { TODO };