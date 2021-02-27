const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },    
    comment: {
        type: String,
        default: false
    },

})


const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;