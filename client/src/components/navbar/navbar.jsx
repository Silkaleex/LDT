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
              <h4 className="tUsuario">Bienvenid@ {name}</h4>
              <div >
                <ul className="containerSections">
                  <li className="listasDeUsuario">
                    <Link to="/tNotas" className="enlaceSecciones">Notas</Link>
                  </li>
                  <li className="listasDeUsuario">
                    <Link to="/tCalendar" className="enlaceSecciones">Eventos</Link>
                  </li>
                  <li className="listasDeUsuario">
                    <Link to="/tAlarma" className="enlaceSecciones">Alarmas</Link>
                  </li>
                  <li className="listasDeUsuario">
                    <Link to="/tPlanificador" className="enlaceSecciones">Planificador</Link>
                  </li>
                </ul>
              </div>
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
              <h4 className="tAdmin">Bienvenid@ {name}</h4>
              <div >
                <ul className="listaComponent">
                  <li className="listasAdm">
                    <Link to="/tNotas" className="listaAdmin">Notas</Link>
                  </li>
                  <li className="listasAdm">
                    <Link to="/tCalendar" className="listaAdmin">Eventos</Link>
                  </li>
                  <li className="listasAdm">
                    <Link to="/tAlarma" className="listaAdmin">Alarmas</Link>
                  </li>
                  <li className="listasAdm">
                    <Link to="/tPlanificador" className="listaAdmin">Planificador</Link>
                  </li>
                </ul>
              </div>
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
