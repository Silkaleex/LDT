/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

const User = () => {
  const [User, setUser] = useState({});
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // const getUser = async()=>{
  //     const response = await axios.get("http://localhost:5000/api/user",{
  //         headers:{
  //             Authorization:token
  //         }
  //     })
  //     // console.log(response)
  //     setUser(response.data.User)

  // }
  // useEffect(()=>{
  //     getUser()
  // },[])
  //console.log(User)
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

  console.log(User);
  return (
    <>
      {role == 1 ? (
       
       <div className="imagenAdmin">
       <div className="inicioAdm">
       <h1 className="colorLetrasAdm tituloAdm">Bienvenido, {User.name}</h1>
       <h2 className="colorLetrasAdm tituloAdm">Aquí Abajo podrás acceder a tu contenido:</h2>
       <div className="cajaEnAdmin">
       <h3 className="colorLetrasAdm letraEnlaceAdm">Tus notas</h3>
       <a className="enlaceAdm" href="/tNotas">Acceder a notas</a>
       </div>
       <div className="cajaEnAdmin">
       <h3 className="colorLetrasAdm letraEnlaceAdm">Tus Eventos</h3>
       <a className="enlaceAdm" href="/tEvento">Acceder a Eventos</a>
       </div>
       <div className="cajaEnAdmin">
       <h3 className="colorLetrasAdm letraEnlaceAdm">Planificador</h3>
       <a className="enlaceAdm" href="/planificador">Acceder a Planificador</a>
       </div>
     </div>
     </div>
      ) : (
        <div className="imagenUsuario">
          <div className="inicioUsuario">
          <h1 className="colorLetras tituloUsuario">Bienvenido, {User.name}</h1>
          <h2 className="colorLetras tituloUsuario">Aquí Abajo podrás acceder a tu contenido:</h2>
          <div className="cajaEnUsuario">
          <h3 className="colorLetras letraEnlace">Tus notas</h3>
          <a className="enlaceUsuario" href="/tNotas">Acceder a notas</a>
          </div>
          <div className="cajaEnUsuario">
          <h3 className="colorLetras letraEnlace">Tus Eventos</h3>
          <a className="enlaceUsuario" href="/tEvento">Acceder a Eventos</a>
          </div>
          <div className="cajaEnUsuario">
          <h3 className="colorLetras letraEnlace">Planificador</h3>
          <a className="enlaceUsuario" href="/planificador">Acceder a Planificador</a>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
export default User;
