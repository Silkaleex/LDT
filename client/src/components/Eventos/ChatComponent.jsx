import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./chatComponent.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [User, setUser] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const socket = io("http://localhost:5000");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setUser(response.data.User);
    };
    getUser();
  }, []);
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

    // Limpiar la conexión al desmontar el componente
    return () => {
      socket.disconnect();
      console.log("Usuario desconectado");
    };
  }, []);

  useEffect(() => {
    // Lógica para cargar los mensajes guardados al iniciar
    socket.on("chat-messages", (messages) => {
      setMessages(messages);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chatMessage", {
      sender: "nombre_usuario",
      content: inputMessage,
    });

    setInputMessage("");
  };
  const Message = ({ content,timestamp}) => {
    const messageTime = new Date(timestamp).toLocaleTimeString();

    return (
      <div className="message-user">
        <div className="burbble-chat">
        <h5>
          {User.name} 
        </h5>
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
        <button type="submit" className="btn-message">Enviar</button>
      </form>
    </div>
  );
};


export default ChatComponent;
