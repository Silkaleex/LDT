import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import { BsFillPersonXFill, BsBoxArrowInLeft } from "react-icons/bs";
const NavBar = () => {
  //setItem es para definir
  //getItem es para coger un valor de esa variable
  //removeItem es para borrar la clave cuando hacemos por ejemplo el logout
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const NavUser = () => {
    return (
      <>
        <nav>
          <div className="cajaGenUs">
            <div className="cajaUser">
              <h4 className="tUsuario">Bienvenido/a {name}</h4>
              <ul className="listaUser">
                <li className="listasUs">
                <Link className="listaUser datosAdm" to="/usuario">
                    Home
                    </Link>
                </li>
                <li className="listaUs">
                  <Link className="listaUser datosUs" to="/DatosUsuario">
                    Perfil
                  </Link>
                  </li>
                <li className="listasUs">
                  <Link className="listaUser datosUs" to="/logout">
                    <BsBoxArrowInLeft />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };

  const NavAdmin = () => {
    return (
      <>
        <nav>
          <div className="cajaAdm ">
            <div className="containerAdm">
              <h4 className="tAdmin">Bienvenido/a {name}</h4>
              <div className="datosAdmin">
                <ul className="listaAd">
                <li className="listasAdm">
                    <Link className="listaAdmin" to="/usuario">
                    Home
                    </Link>
                    </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/DatosUsuario">
                      Perfil
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin " to="/logout">
                      <BsFillPersonXFill />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };
  const NavHome = () => {
    return (
      <>
        <nav>
          <div className="cajaHome">
            <h1 className="tituloInicial">Bienvenidos a LDT!</h1>
          </div>
        </nav>
      </>
    );
  };
  // eslint-disable-next-line eqeqeq
  let navbar = role == 0 ? NavUser() : role == 1 ? NavAdmin() : NavHome();

  return (
    <div>
      {/*Condición, que en función del rol si está logueado o no me demuestra una nav(una función) u otra */}
      {navbar}
    </div>
  );
};
export default NavBar;
