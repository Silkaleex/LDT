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
    chat: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Chat",
      },
    ],
    banned: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Number,
      default: 0,
      //0: Users
      //1: Administrators
    },
    amistads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amistad",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
