console.log("Hello World!");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const Chat = require('./models/chat'); // Importa el modelo de chat

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
  io.on("connection", (socket) => {
    console.log("Estas conectado al chat");
  
    socket.on("chatMessage", (data) => {
      // Guardar el mensaje en la base de datos utilizando el modelo de chat
      const chatMessage = new Chat({
        sender: data.sender,
        content: data.content
      });
  
      chatMessage.save()
        .then(savedMessage => {
          // Emitir el mensaje a todos los clientes conectados
          io.emit("chat-message", savedMessage);
        })
        .catch(error => {
          console.log(error);
        });
    });
  
    socket.on("get-chat-messages", () => {
      // Obtener los mensajes de chat guardados y enviarlos al cliente
      Chat.find()
        .sort({ timestamp: 1 })
        .lean()
        .then(messages => {
          // Emitir los mensajes guardados al cliente
          socket.emit("chat-messages", messages);
        })
        .catch(error => {
          console.log(error);
        });
    });
  
    socket.on("disconnect", () => {
      console.log("te fuistes del chat");
    });
  });
  

http.listen(5000, () => {
  console.log("Servidor en el puerto 5000");
});