const mongoose = require("mongoose");
const alarmaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  alarm: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("alarma", alarmaSchema);
