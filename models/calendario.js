const mongoose = require("mongoose");
const calendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  alarma: {
    type: String,
    required: true,
  },
  calendar: {
    type: String,
    required: true,
  },
  planificador: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("calendario", calendarSchema);
