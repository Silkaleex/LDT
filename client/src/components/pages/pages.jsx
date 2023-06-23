import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Licencia from "../Home/Licencia";
import Login from "../Login/Login";
import Register from "../Register/register";
import TodosLosCalendar from "../Eventos/TodosLosCalendar";
import Calendar from "../Eventos/calendar";
import TodasLasNotas from "../Notas/TodasLasNotas";
import Notas from "../Notas/Notas";
import TodasLasAlarmas from "../Eventos/TodasLasAlarmas";
import Alarma from "../Eventos/Alarmas";
import Planificador from "../Planificador/Planificador";
import TodosLosPlanificadores from "../Planificador/todosLosPlanificadores";
import Usuario from "../Usuario/user";
import DatosUsuario from "../PerfilUsuario/DatosUsuario";
import Logout from "../Login/Logout";
import NewNot from "../Notas/NewNot";
import NewAlm from "../Eventos/NewAlarm";
import NewCal from "../Eventos/newCalendar";
import NewPlan from "../Planificador/newPlan";
import ModificacionNota from "../modificacion/ModifcacionNota";
import ModificacionAlm from "../modificacion/ModificacionAlarma";
import ModificacionCal from "../modificacion/ModificacionCalendar";
import ModifcacionPlan from "../modificacion/ModificacionPlan";
import ModificacionUsuario from "../modificacion/modificacionUsuario";
import Usuarios from "../PerfilUsuario/Usuarios";
import PUsuarios from "../PerfilUsuario/Pusuarios";
import Dudas from "../Login/dudas";
import EventosPublicos from "../Eventos/EventosPublicos";
import ChatComponent from "../Eventos/ChatComponent";

const Pages = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      <Route path="/licencia" element={<Licencia />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/dudas" element={<Dudas />} />
      {/* Register */}
      <Route path="/register" element={<Register />} />
      {/* Notas */}
      <Route path="/tNotas" element={<TodasLasNotas />} />
      <Route path="/notas/:notaId" element={<Notas />} />
      <Route path="/newNot" element={<NewNot />} />
      {/* Eventos Publicos/Pivados + chat */}
      <Route path="/chats/:eventId" element={<ChatComponent />} />
     <Route path="/eventosPublicos" element={<EventosPublicos />} />
      {/* Eventos */}
      <Route path="/tCalendar" element={<TodosLosCalendar />} />
      <Route path="/calendar/:eventoId" element={<Calendar />} />
      <Route path="/newCal" element={<NewCal />} />
      {/* Alarmas */}
      <Route path="/tAlarma" element={<TodasLasAlarmas />} />
      <Route path="/alarma/:alarmaId" element={<Alarma />} />
      <Route path="/newAlm" element={<NewAlm />} />
      {/* Planificador */}
      <Route path="/planificar/:planificadorId" element={<Planificador />} />
      <Route path="/tPlanificador" element={<TodosLosPlanificadores />} />
      <Route path="/newPLan" element={<NewPlan />} />
      {/*Perfil Usuario */}
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/datosUsuario" element={<DatosUsuario />} />
      {/*Datos Usuarios Eliminación o Baneo */}
      <Route path="/Usuarios" element={<Usuarios />} />
      <Route path="/Usuarios/:userId" element={<PUsuarios />} />
      {/*Modificacion */}
      <Route path="/modify/:notaId" element={<ModificacionNota />} />
      <Route path="/modifyAlm/:alarmaId" element={<ModificacionAlm />} />
      <Route path="/modifyCal/:eventoId" element={<ModificacionCal />} />
      <Route path="/modifyPlan/:planificadorId" element={<ModifcacionPlan />} />
      <Route path="/modificacionUsuario" element={<ModificacionUsuario />} />
      {/* Logout */}
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};
export default Pages;
