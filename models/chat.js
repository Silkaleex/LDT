const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  messageId: { type: String, unique: true },
  sender: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
