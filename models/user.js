const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 15,
      minlength: 3,
    },
    surname: {
      type: String,
      required: true,
      maxlength: 15,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      maxlength: 2,
      minlength: 2,
      required: true,
    },
    phone: {
      type: Number,
      maxlength: 9,
      minlength: 9,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
