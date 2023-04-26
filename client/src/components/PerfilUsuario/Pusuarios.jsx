import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Pusuarios.css'
import { TbTrash } from "react-icons/tb";
import { Button, CardTitle, CardText, Card } from "reactstrap";
const PUsuarios = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // const banned = localStorage.getItem("banned");
  const[baned,setBaned] = useState(false)
  const [Profile, setProfile] = useState({});
  const { userId } = useParams();
  const PerfilUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/user/${userId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
    setProfile(response.data.User);
    setBaned(response.data.User.banned);
  };
  useEffect(() => {
    PerfilUser();
  }, []);

  const deleteUser = async (idUser) => {
    localStorage.setItem("idUsuario", idUser);
    let opcion = window.confirm("¿Estas Seguro de Eliminar a este Usuario?");
    if (opcion == true) {
      const response = await axios.delete(
        `http://localhost:5000/api/user/${idUser}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      setTimeout(() => {
        window.location.href = "/datosUsuario";
      }, 3000);
      console.log(response);
    }
  };

  const bannUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users_ban/${userId}`,
        { ...Profile },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response);
      setProfile(response.data.User);
      setBaned(response.data.User.banned);

      setTimeout(() => {
        window.location.href = `/Usuarios/${userId}`;
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };

  const unbannUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users_desban/${userId}`,
        { ...Profile },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);
      setProfile(response.data.User);
      setBaned(response.data.User.banned);

      setTimeout(() => {
        window.location.href = `/Usuarios/${userId}`;
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="fondoProfileUser">
      {role == 1 ? (
        <Card className="carta">
          <CardTitle tag="h1">Perfil de Usuario</CardTitle>
          <CardText tag="h4">Nombre: {Profile.name}</CardText>
          <CardText tag="h4">Apellidos: {Profile.surname}</CardText>
          <CardText tag="h4">Email: {Profile.email}</CardText>
          <div className="botonesOpciones">
          <Button
            className="btnElmUsuario"
            onClick={() => {
              deleteUser(Profile._id);
            }}
          >
            <TbTrash />
          </Button>
          {Profile.banned == false ? (
            <Button className=" btnBaneoUs" onClick={bannUser}>
              Banear Usuario
            </Button>
          ) : (
            <Button className=" btnDesBaneoUs" onClick={unbannUser}>
              Desbanear Usuario
            </Button>
          )}
          </div>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PUsuarios;
