const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({

})


const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;