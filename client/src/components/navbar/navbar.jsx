import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import {BsFillPersonXFill,BsBoxArrowInLeft}  from "react-icons/bs";
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
              <h4 className="tUsuario">Bienvenido {name}</h4>
            
                <ul className="listaUser">
                  <li className="listas">
                    <Link className="listaUser" to="/usuario">
                      Usuario
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser" to="/tNotas">
                      Notas
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser" to="/tCalendar">
                      Eventos
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser" to="/planificador">
                      Planificador
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser" to="/tAlarma">
                      Alarma
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser datosUs" to="/DatosUsuario">
                      Tus Datos
                    </Link>
                  </li>
                  <li className="listas">
                    <Link className="listaUser datosUs" to="/logout">
                    <BsBoxArrowInLeft/>
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
              <h4 className="tAdmin">Bienvenido {name}</h4>
          
                <ul className="listaAd">
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/usuario">
                      Usuario
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/tNotas">
                      Notas
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/tCalendar">
                      Eventos
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/planificador">
                      Planificador
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin" to="/tAlarma">
                      Alarma
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin datosAdm" to="/DatosUsuario">
                     Perfil
                    </Link>
                  </li>
                  <li className="listasAdm">
                    <Link className="listaAdmin datosAdm " to="/logout">
                      <BsFillPersonXFill/>
                    </Link>
                  </li>
                </ul>
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
            <h1 className="tituloInicial">Bienvenido a LDT!</h1>
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
