const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messagesSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: String,
    completed: Boolean,
})
const Message = mongoose.model('Message', messagesSchema);

module.exports = Message;