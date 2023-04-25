import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="imagen">
    <div className="contenedorHome">
      <h1 className="tituloHome">Bienvenidos a vuestra Lista de Tareas</h1>
      <p className="fraseHome">
        Aquí podrás guardar tus notas y eventos a tu gusto, sin necesidad de dar
        explicaciones y a tu ritmo
      </p>
      <div className="cajaEnlacesHome">
        <Link className="enlacesHomeA" to="/register">
          Unete a nuestra Aplicación
        </Link>
        <Link className="enlacesHomeB" to="/login">
          Accede a tu Cuenta
        </Link>  
          <Link className="termLicn" to="/licencia">Terminos y condiciones</Link>     
      </div>

    </div>
    </div>
  );
}

export default home;
