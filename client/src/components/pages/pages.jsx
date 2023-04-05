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
        {/* Eventos */}
        <Route path="/tEvento" element={<TodosLosEventos />} />
        <Route path="/evento/:eventoId" element={<Eventos />} />
        {/* Alarmas */}
        <Route path="/tAlarma" element={<TodasLasAlarmas />} />
        <Route path="/alarma" element={<Alarma />} />
        {/* PLanificador */}
        <Route path="/planificador" element={<Planificador />} />
        {/*Perfil Usuario */}
        <Route path="/usuario" element={<Usuario />} />
      </Routes>

  );
};
export default Pages;
