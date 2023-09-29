// schema for messages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: String,
    user: String,
    added: {type: Date, default: Date.now}
}
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;