import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./chatComponent.css";

const ChatComponent = () => {
  // Estado para almacenar los mensajes
  const [messages, setMessages] = useState([]);

  // Estado para almacenar la información del usuario
  const [User, setUser] = useState({});

  // Estado para el mensaje de entrada
  const [inputMessage, setInputMessage] = useState("");

  // Estado para el mensaje de advertencia
  const [warningMessage, setWarningMessage] = useState("");

  // Conexión al servidor de Socket.IO
  const socket = io("http://localhost:5000");

  // Obtener el token de autenticación del localStorage
  const token = localStorage.getItem("token");

  // Obtener la información del usuario al cargar la página
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data.User);
    };
    getUser();
  }, []);

  // Configuración de los eventos de Socket.IO
  useEffect(() => {
    // Solicitar los mensajes guardados al cargar la página
    socket.emit("get-chat-messages");

    // Lógica para recibir mensajes del servidor
    socket.on("chat-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Lógica para manejar la desconexión del servidor
    socket.on("disconnect", () => {
      console.log("Usuario desconectado");
    });

    // Lógica para recibir advertencias de violación del servidor
    socket.on("violationWarning", (message) => {
      setWarningMessage(message);
      setTimeout(() => {
        setWarningMessage("");
      }, 2000);
    });

    // Limpiar la conexión al desmontar el componente
    return () => {
      socket.disconnect();
      console.log("Usuario desconectado");
    };
  }, []);

  // Cargar los mensajes guardados al iniciar
  useEffect(() => {
    socket.on("chat-messages", (messages) => {
      setMessages(messages);
    });
  }, []);

  // Función para enviar un mensaje
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chatMessage", {
      sender: User.name,
      content: inputMessage,
    });
    setInputMessage("");
  };

  // Componente para mostrar un mensaje
  const Message = ({ content, timestamp, sender }) => {
    const messageTime = new Date(timestamp).toLocaleTimeString();

    return (
      <div className="message-user">
        <div className="burbble-chat">
          <h5>{sender}</h5>
          <p className="separation-message"> - </p>
          <p>{content}</p>
          <p className="message-time">enviado a las: {messageTime}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="message">
      <h1 className="title-message">Sala de Chat</h1>
      {warningMessage && (
        <div className="warning-message">{warningMessage}</div>
      )}
      <div className="message-list">
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            sender={message.sender}
            messageId={message._id}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <form onSubmit={sendMessage} className="write-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="txt-message"
        />
        <button type="submit" className="btn-message">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
