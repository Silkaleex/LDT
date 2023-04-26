import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DelUs.css";
import { Link } from "react-router-dom";
const DelUs = () => {
  const token = localStorage.getItem("token");
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    setUsuarios(response.data.Users);
  };

  useEffect(() => {
    getUsers();
  }, []);



  return (
    <div className="containerFondoEliminacion">
      <h1 className="TltProfile">Usuarios registrados:</h1>
      {usuarios.map((user) => {
        return (
          <div className="cajaEliminacion" key={user._id}>
            <h3>{user.name}</h3>
            <h3>{user.surname}</h3>
            <h3>{user.email}</h3>
            <div className="cajaBtnProfileUser">
            <Link className="EnlaceBtnUsuario" to={`/Usuarios/${user._id}`}>Ver Usuario</Link>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default DelUs;
