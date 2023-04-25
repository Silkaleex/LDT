import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datosUsuario.css";
import { Link } from "react-router-dom";
import { BsPersonDashFill } from "react-icons/bs";
function DatosUsuario() {
 
  const [User, setUser] = useState({});
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

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

  const deleteAccount = async (e) => {
    let opcion = window.confirm("¿Estas Seguro de Eliminar tu Cuenta?");
    if (opcion == true) {
      try {
        const response = await axios.delete("http://localhost:5000/api/user", {
          headers: {
            Authorization: token,
          },
        });
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        console.log(response);
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
 
  return (
    <>
      {role == 1 ? (
        <div className="containerpeAdm">
          <div className="cajaPeAdm">
            <div className="card cartaAdmin">
              <div className="card-body">
                <h3 className="tituloAdmin">
                  Hola {User.name} Aqui tienes tus datos como Administrador:
                </h3>
                <h5>Nombre:  {User.name}</h5>
                <h5>Apellidos:  {User.surname}</h5>
                <h5>Email:  {User.email}</h5>
                <div className="cajabotonesAdmin">
                  <button className="botonDelAdm" onClick={deleteAccount}>
                <BsPersonDashFill/>
                  </button>
                  <Link to={`/modificacionUsuario`} className="modificarAdmin">
                    Modificar Usuario
                  </Link>
                  <Link to={`/ElmUsuario`} className="btnVerUsers">
                  Ver Usuarios
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="containerPeUs">
          <div className="cajaPeUs">
            <div className="card cartaUs">
              <div className="card-body">
                <h3>
                  Hola {User.name} Aqui tienes tus datos de Usuario:
                </h3>
                <h5>Nombre: {User.name}</h5>
                <h5>Apellidos: {User.surname}</h5>
                <h5>Email: {User.email}</h5>
              </div>
              <div className="cajaBotonesUsuario">
                <button className="botonElUs" onClick={deleteAccount}>
               <BsPersonDashFill/>
                </button>
                <Link to={`/modificacionUsuario`} className="modificarUsuario">
                  Modificar Usuario
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DatosUsuario;
