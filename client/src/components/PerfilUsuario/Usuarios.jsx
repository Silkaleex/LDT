import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DelUs.css";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
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
    <Card>
      <CardBody className="containerFondoEliminacion">
        <CardTitle tag="h3" className="TltProfile">
          Usuarios registrados:
        </CardTitle>
        {usuarios.map((user) => {
          return (
            <CardBody className="cajaEliminacion" key={user._id}>
              <CardText>{user.name}</CardText>
              <CardText>{user.surname}</CardText>
              <CardText>{user.email}</CardText>
              <div className="cajaBtnProfileUser">
                <Link className="EnlaceBtnUsuario" to={`/Usuarios/${user._id}`}>
                  Ver Usuario
                </Link>
              </div>
            </CardBody>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default DelUs;
