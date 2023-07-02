// En el modelo chat.js, asegúrate de tener el campo "sender" solo como String
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    messageId: {
      type: String,
      required: true,
    },
    sender: {
      type: String, // Cambia esto de mongoose.Types.ObjectId a String
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
