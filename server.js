console.log("Hello World!");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const Chat = require("./models/chat"); // Importa el modelo de chat
const uuid = require("uuid");


// Configuración de Socket.IO
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000", // Reemplaza con la URL de tu cliente
    methods: ["GET", "POST"], // Especifica los métodos HTTP permitidos
  },
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// Utilizamos cors para permitir acceso desde cualquier lugar
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
    console.log("LDT está conectada");
  })
  .catch((error) => {
    console.log(error);
  });

// Lógica de manejo de eventos de socket.io
io.on("connection", (socket) => {
  let typingUsers = []; // Almacenar usuarios que están escribiendo

  socket.on("typing", (user) => {
    if (!typingUsers.includes(user)) {
      typingUsers.push(user);
      io.emit("typing", typingUsers); // Emitir a todos los demás usuarios, incluido el que está escribiendo
    }
  });

  socket.on("stopTyping", (user) => {
    typingUsers = typingUsers.filter((u) => u !== user);
    io.emit("typing", typingUsers); // Emitir a todos los demás usuarios, excluyendo al que dejó de escribir
  });

  console.log("Estás conectado al chat");
  const palabrasOfensivas = [
    "Abanto",
    "Alcornoque",
    "Baboso",
    "Besugo",
    "Bobalicón",
    "Bocachancla",
    "Bocallanta",
    "Borrico",
    "Botarate",
    "Cagarruta",
    "Capullo",
    "Caracaculo",
    "Cebollino",
    "Cenutrio",
    "Ceporro",
    "Cernícalo",
    "Energúmeno",
    "Gandúl",
    "Gañán",
    "Gilipuertas",
    "Huevón",
    "Lameculos",
    "Lerdo",
    "Melón",
    "Mendrugo",
    "Mentecato",
    "Mequetrefe",
    "Merluzo",
    "Palurdo",
    "Pardillo",
    "Pasmarote",
    "Pedorro",
    "Pelele",
    "Pintamonas",
    "Piojoso",
    "Zopenco",
    "Gilipollas",
    "hijo de puta",
    "hijo puta",
    "subnormal",
    "tonto",
    "gilipollas",
    "retrasao",
    "cabeza pino",
    "me cago en tus muertos",
    "payaso",
    "lerdo",
  ];
  const verificarPalabraOfensiva = (mensaje) => {
    // Normaliza el mensaje convirtiéndolo a minúsculas y eliminando las tildes
    const mensajeNormalizado = mensaje
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  
    // Verifica si alguna palabra ofensiva está presente en el mensaje normalizado
    const palabraOfensivaEncontrada = palabrasOfensivas.some((palabra) =>
      mensajeNormalizado.includes(palabra)
    );
  
    return palabraOfensivaEncontrada;
  };
  socket.on("chatMessage", (data) => {
    // Realiza las validaciones aquí
    if (data.content.trim() === "") {
      // El mensaje está vacío, no lo guardes y emite un mensaje de error al cliente
      socket.emit("validationError", "El mensaje no puede estar vacío");
      return;
    }
    if (data.content.includes("lenguaje ofensivo")) {
      // El mensaje contiene lenguaje ofensivo, notificar al usuario
      socket.emit("violationWarning", "Has enviado un mensaje ofensivo");
      // Aquí podrías realizar otras acciones, como registrar la infracción o aplicar una sanción
      return;
    }
    if (data.content.length > 100) {
      // El mensaje excede el número máximo de caracteres permitidos, no lo guardes y emite un mensaje de error al cliente
      socket.emit(
        "validationError",
        "El mensaje excede el límite de caracteres"
      );
      return;
    }

    const chatMessage = new Chat({
      messageId: uuid.v4(),
      sender: data.sender,
      content: data.content,
      timestamp: Date.now(),
    });
    // Verificar si el mensaje contiene palabras ofensivas
    const tieneInsultos = palabrasOfensivas.some((insulto) =>
      data.content.toLowerCase().includes(insulto)
    );

    if (tieneInsultos) {
      // Si el mensaje contiene insultos, emite una advertencia y realiza alguna acción, como notificar al usuario o tomar medidas disciplinarias.
      io.emit(
        "violationWarning",
        "Has utilizado un lenguaje ofensivo. Por favor, sé respetuoso, o seras expulsado del chat."
      );
      // También puedes registrar el incidente en algún lugar para futuras referencias o acciones adicionales.
      console.log("Mensaje con insulto detectado:", data.content);
      return;
    }

    chatMessage
      .save()
      .then((savedMessage) => {
        io.emit("chat-message", savedMessage);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  socket.on("get-chat-messages", () => {
    Chat.find()
      .sort({ timestamp: 1 })
      .lean()
      .then((messages) => {
        socket.emit("chat-messages", messages);
      })
      .catch((error) => {
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
