import React, { useState, useEffect } from "react";
import axios from "axios";
import './datosUsuario.css'

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
  return (
    <>
      {role == 1 ? (
        <div className="containerpeAdm">
        <div className="cajaPeAdm">
          <div className="card">
            <div className="card-body">
            <h3>Hola {User.name} Aqui tienes tus datos de perfil de usuario:</h3>
              <h5 className="card-title"> {User.name}</h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
               {User.surname}
              </h5>
              <h5 className="card-text">
             {User.email}
              </h5>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <div className="containerPeUs">
        <div className="cajaPeUs">
        <div className="card">
          <div className="card-body">
            <h3>Hola {User.name} Aqui tienes tus datos de perfil de usuario:</h3>
            <h5 className="card-title">*{User.name}</h5>
            <h5 className="card-subtitle mb-2 text-body-secondary">
            *{User.surname}
            </h5>
            <h5 className="card-text">
            *{User.email}
            </h5>
          </div>
        </div>
      </div>
      </div>
      )}
    </>
  );
}

export default DatosUsuario;
