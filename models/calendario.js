const mongoose = require("mongoose");
const calendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  calendar: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
    tipo: {
    type: String,
    required: true,
    enum: ['publico', 'privado'],
  },
  solicitud: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("calendario", calendarSchema);
