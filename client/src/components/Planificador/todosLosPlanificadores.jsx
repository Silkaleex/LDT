/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
 import "./todosLosPlanificadores.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbColorPicker } from "react-icons/tb"
import { CiPen }from "react-icons/ci";
const TodosLosPlanificadores = () => {
  const [plan, setPlan] = useState([]);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const getPln = async () => {
    const response = await axios.get("http://localhost:5000/api/toPlan", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
     setPlan(response.data.Planificador.planning);
  };

  useEffect(() => {
    getPln();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {role == 1 ? (
        <div className="fondoAdmPlaning">
          <div className="cajaAdmPlanning">
            <h1 className="tituloAdmPlanning">Tu Planing del mes</h1>
            <div className="contenidoAdmPlanning">
              {plan.map((pln) => {
                return (
                  <div key={pln._id} className="DescripcionAdmPlanning"> 
                      <h2>{pln.title}</h2>
                      <h3>{pln.description}</h3>
                      <Link to={`/planificar/${pln._id}`} className="accesoAdmPlanning" >ver el Planning</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cajaEnlaceAdmPLanning">
             <Link to="/newPLan" className="enlaceAdmPlanning">
              <TbColorPicker />
            </Link> 
          </div>
        </div>
      ) : (
        <div className="fondoUsPlaning">
          <div className="cajaUsPlanning">
            <h1 className="tituloUsPlanning">Tus Planificadores</h1>
            <div className="contenidoUsPlanning">
              {plan.map((pln) => {
                return (
                  <div key={pln._id} className="DescripcionUsPlanning">
                   
                      <h2>{pln.title}</h2>
                      <h3>{pln.description}</h3>
                      <Link to={`/planificar/${pln._id}`} className="accesoUsPlanning">Ver el Planning</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cajaEnlaceUsPLanning">
             <Link to="/newPLan" className="enlaceUsPlanning" >
              <CiPen />
            </Link> 
          </div>
        </div>
      )}
      
    </>
  );
};

export default TodosLosPlanificadores;
