console.log("Hello World!");
const express = require("express");
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
//utilizamos corse para que este acedido desde cualquier lugar
app.use(cors())

const userRouter = require("./routes/UserRouter");
const NotesRouter = require("./routes/NotesRouter");
const calendarRouter = require("./routes/calendarioRouter");
const alarmaRouter = require("./routes/alarmaRouter")
const planificadorRouter = require("./routes/planificadorRouter")

app.use("/api", userRouter);
app.use("/api", NotesRouter);
app.use("/api", calendarRouter);
app.use("/api", alarmaRouter);
app.use("/api", planificadorRouter);

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
