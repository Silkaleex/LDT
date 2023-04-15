import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from"../Home/home"
import Login from "../Login/Login";
import Register from "../Register/register";
import TodosLosEventos from "../Eventos/TodosLosEventos";
import Eventos from"../Eventos/Eventos"
import TodasLasNotas from "../Notas/TodasLasNotas";
import Notas from "../Notas/Notas";
import TodasLasAlarmas from "../Eventos/TodasLasAlarmas";
import Alarma from"../Eventos/Alarmas"
import Planificador from "../Planificador/Planificador";
import Usuario from '../Usuario/user'
import ModificacionNota from '../modificacion/ModifcacionNota'
import DatosUsuario from '../PerfilUsuario/DatosUsuario'
import Logout from "../Login/Logout";
import NewNot from "../Notas/NewNot";
import NewAlm from "../Eventos/NewAlarm"

const Pages = () => {
  return (
  
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Register */}
        <Route path="/register" element={<Register />} />
        {/* Notas */}
        <Route path="/tNotas" element={<TodasLasNotas />} />
        <Route path="/notas/:notaId" element={<Notas />} />
        <Route path="/newNot" element={<NewNot />} />
        {/* Eventos */}
        <Route path="/tEvento" element={<TodosLosEventos />} />
        <Route path="/evento/:eventoId" element={<Eventos />} />
        {/* Alarmas */}
        <Route path="/tAlarma" element={<TodasLasAlarmas />} />
        <Route path="/alarma/:alarmaId" element={<Alarma />} />
        <Route path="/newAlm" element={<NewAlm/>}/>
        {/* PLanificador */}
        <Route path="/planificador" element={<Planificador />} />
        {/*Perfil Usuario */}
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/datosUsuario" element={<DatosUsuario/>}/>
        {/*Modificacion */}
        <Route path="/modify/:notaId" element={<ModificacionNota/>} />
        {/* Logout */}
        <Route path="/logout" element={<Logout/>} />
      </Routes>

  );
};
export default Pages;
