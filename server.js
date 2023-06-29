console.log("Hello World!");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const Chat = require('./models/chat'); // Importa el modelo de chat
const uuid = require("uuid");

// Configuración de Socket.IO
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: 'http://localhost:3000', // Reemplaza con la URL de tu cliente
    methods: ['GET', 'POST'] // Especifica los métodos HTTP permitidos
  }
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//utilizamos corse para que este acedido desde cualquier lugar
app.use(cors());

const userRouter = require("./routes/UserRouter");
const NotesRouter = require("./routes/NotesRouter");
const calendarRouter = require("./routes/calendarioRouter");
const alarmaRouter = require("./routes/alarmaRouter");
const planificadorRouter = require("./routes/planificadorRouter");

app.use("/api", userRouter);
app.use("/api", NotesRouter);
app.use("/api", calendarRouter);
app.use("/api", alarmaRouter);
app.use("/api", planificadorRouter);

const URL = process.env.mongo_db;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("LDT esta conectada");
  })
  .catch((error) => {
    console.log(error);
  });
// Lógica de manejo de eventos de socket.io
io.on("connection", (socket) => {
  console.log("Estás conectado al chat");

  socket.on("chatMessage", (data) => {
    const chatMessage = new Chat({
      messageId: uuid.v4(),
      sender: data.sender,
      content: data.content,
      timestamp: Date.now()
    });

    chatMessage.save()
      .then(savedMessage => {
        io.emit("chat-message", savedMessage);
      })
      .catch(error => {
        console.log(error);
      });
  });

  socket.on("get-chat-messages", () => {
    Chat.find()
      .sort({ timestamp: 1 })
      .lean()
      .then(messages => {
        socket.emit("chat-messages", messages);
      })
      .catch(error => {
        console.log(error);
      });
  });

  socket.on("disconnect", () => {
    console.log("Te fuiste del chat");
  });
});

http.listen(5000, () => {
  console.log("Servidor en el puerto 5000");
});