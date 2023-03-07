console.log("Hello World!");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRouter");
app.use("/api", userRouter);

const URL = process.env.mongo_db;

mongoose
  .connect(URL, {})
  .then(() => {
    console.log("LDT esta conectada");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(5000, () => {
  console.log("server esta en el puerto 5000");
});
