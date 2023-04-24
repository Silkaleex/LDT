const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    notes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Notes",
      },
    ],
    calendar: [
      {
        type: mongoose.Types.ObjectId,
        ref: "calendario",
      },
    ],
    alarma: [
      {
        type: mongoose.Types.ObjectId,
        ref: "alarma",
      },
    ],
    planning: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Planificador",
      },
    ],
    banned: [
      {
        type: Boolean,
        default: false,
      },
    ],
    role: {
      type: Number,
      default: 0,
      //0:Users
      //1:Administrators
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
