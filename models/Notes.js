const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tareas: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Notes", notesSchema);
