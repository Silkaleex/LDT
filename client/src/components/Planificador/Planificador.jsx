/* eslint-disable eqeqeq */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import './planificador.css'
import { TbTrash } from "react-icons/tb";
function Planificador() {
  const { planificadorId } = useParams();
  const [planning, setPlanning] = useState({});
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const getPlanning = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/planificador/${planificadorId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response.data.plan);
    setPlanning(response.data.plan);
  };
  useEffect(() => {
    getPlanning();
    
  }, []);

  // console.log(planning);

  const deleteNota = async (e) => {
    e.preventDefault();
    let opcion = window.confirm("¿Estas seguro de borrar la nota?");
    if (opcion == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/planificador/${planificadorId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        setTimeout(() => {
          // window.location.href = "/usuario" nos refresca la pagina, es recomendable usarlo para actualizar un estado
          navigate("/tPlanificador");
        });
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      {role == 1 ? (
        <div className="fondoPlnAdm">
          <div className="contenedorPlnAdm">
            <div className="descripcionPlnAdm">
              <h1>Descripcion del Planning:</h1>
              <h2>{planning.title}</h2>
              <h3>{planning.description}</h3>
              <div className="cajaBotonesAdm">
                <Link to="/tPlanificador" className="botonAdm">
                  Volver
                </Link>
                 <Link to={`/modifyPlan/${planificadorId}`} className="modificarNoAdm">
                  Modificar Planificador
                </Link> 
                <button className="botonDelAdmPln" onClick={deleteNota}>
                <TbTrash/>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fondoPlnUs">
          <div className="contenedorPlnUs">
            <div className="descripcionPlnUs">
              <h1>Descripcion del Planning:</h1>
              <h2>{planning.title}</h2>
              <h3>{planning.description}</h3>
              <div className="cajaBotonesUs">
                <Link to="/tPlanificador" className="botonUs">
                  Volver
                </Link>
                 <Link to={`/modifyPlan/${planificadorId}`} className="modificarPlnUs">
                  Modificar Planificador
                </Link> 
                <button className="botonPlnUs" onClick={deleteNota}>
                 <TbTrash/>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Planificador;
