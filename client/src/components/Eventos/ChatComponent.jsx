import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import "./chatComponent.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatComponent = () => {
  const messageListRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [User, setUser] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [typingUsers, setTypingUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);
  const socket = useRef(null);
  const token = localStorage.getItem("token");

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

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    // Solicitar los mensajes guardados al cargar la página
    socket.current.emit("get-chat-messages");

    // Lógica para recibir mensajes del servidor
    socket.current.on("chat-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Lógica para manejar la desconexión del servidor
    socket.current.on("disconnect", () => {
      console.log("Usuario desconectado");
      setIsConnected(false);
    });

    // Lógica para manejar la conexión exitosa al servidor
    socket.current.on("connect", () => {
      console.log("Usuario conectado");
      setIsConnected(true);
    });

    // Lógica para recibir advertencias de violación del servidor
    socket.current.on("violationWarning", (message) => {
      setWarningMessage(message);
      setTimeout(() => {
        setWarningMessage("");
      }, 2000);
    });

    // Lógica para manejar el evento de escritura de otros usuarios
    socket.current.on("typing", (user) => {
      setTypingUsers((prevUsers) => [...prevUsers, user]);
    });

    // Lógica para manejar el evento de parar de escribir de otros usuarios
    socket.current.on("stopTyping", (user) => {
      setTypingUsers((prevUsers) => prevUsers.filter((u) => u !== user));
    });

    return () => {
      socket.current.disconnect();
      console.log("Usuario desconectado");
    };
  }, []);

  useEffect(() => {
    socket.current.on("chat-messages", (messages) => {
      setMessages(messages);
    });
  }, []);

  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") {
      toast.error("El mensaje no puede estar vacío.");
      return;
    }
    if (inputMessage.length > 40) {
      toast.error("El mensaje no puede exceder los 40 caracteres.");
      return;
    }
    if (inputMessage.trim() !== "") {
      socket.current.emit("chatMessage", {
        sender: User.name,
        content: inputMessage,
      });
      setInputMessage("");
    }
    
  };

  const handleTyping = () => {
    if (!isTyping) {
      socket.current.emit("typing", User.name);
      setIsTyping(true);
    }

    clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      socket.current.emit("stopTyping", User.name);
      setIsTyping(false);
    }, 2000);
  };

  const Message = ({ content, timestamp, sender }) => {
    const messageTime = new Date(timestamp).toLocaleTimeString();
    const isCurrentUser = sender === User.name;

    return (
      <div className="message-user">
        <div className={`burbble-chat ${isCurrentUser ? "current-user" : ""}`}>
          <h5>{sender}</h5>
          <p className="separation-message"> - </p>
          <p className="message-txt">{content}</p>
          <p className="message-time">enviado a las: {messageTime}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="message">
      <ToastContainer/>
      <h1 className="title-message">Bienvenido al chat:</h1>
      <h2 className="title-message2">{User.name}</h2>
      {isConnected ? (
        <div className="connection-status">Estas Conectado</div>
      ) : (
        <div className="connection-status"> Estas Desconectado</div>
      )}
      {warningMessage && <div className="warning-message">{warningMessage}</div>}
      <div className="message-list" ref={messageListRef}>
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
      {typingUsers.map((user) => (
        <p key={user}>{`${user} está escribiendo...`}</p>
      ))}
      <form onSubmit={sendMessage} className="write-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => {
            setInputMessage(e.target.value);
            handleTyping();
          }}
          placeholder="Escribe tu mensaje aquí"
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
