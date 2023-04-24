import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./modificacion.css";
const ModifcacionUsuario = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(token);
  const Navigate = useNavigate();
  const [user, setUser] = useState({
   email:"",
    name:"",
  });

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

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const modificacionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/user`,
        { ...user },{
          headers:{
            Authorization:token
          }
        }
      );
      console.log(response);
      setTimeout(() => {
        window.location.href = `/datosUsuario`;
      }, 2000);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="cajaAdmMody">
          <form onSubmit={modificacionSubmit}>
            <div className="containerModyAdm">
              <label className="labelModyAdm" htmlFor="email">
                Email:
              </label>
              <input
                className="inputModyAdm WModAdm"
                placeholder="email"
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={onChangeInput}
              ></input>
              <label className="labelModyAdm" htmlFor="name">
                Nombre:
              </label>
              <input
                className="inputModyAdm"
                placeholder="name"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={onChangeInput}
              ></input>
              <div className="containerBtnModyAdm">
                <button type="submit" className="botonModModyAdm">Modificar Perfil de Usuario</button>
                <Link to="/datosUsuario" className="botonVolModyAdm">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cajaUsuario">
          <form onSubmit={modificacionSubmit}>
            <div className="containerNotasUs">
              <label className="labelNotUs" htmlFor="email">
                Email:
              </label>
              <input
                className="inputUs"
                placeholder="email"
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={onChangeInput}
              ></input>
              <label className="labelNotUs" htmlFor="name">
                Nombre:
              </label>
              <input
                className="inputUs"
                placeholder="name"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={onChangeInput}
              ></input>
              <div className="containerBotonesUs">
                <button type="submit" className="botonModNotUs">Modificar Perfil de Usuario</button>
                <Link to="/datosUsuario" className="botonVolNotUs">
                  Volver
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ModifcacionUsuario;
