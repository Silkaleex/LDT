/* eslint-disable eqeqeq */
import React from "react";
import axios from "axios";
import "./todosLosPlanificadores.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbColorPicker } from "react-icons/tb";
import { CiPen } from "react-icons/ci";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

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
            {plan.map((pln) => {
              return (
                <div key={pln._id} className="DescripcionAdmPlanning">
                  <div className="contenidoAdmPlanning">
                    <div>
                      <h2 className="letraPlnAdmin">Titulo: {pln.title}</h2>
                      <h3 className="letraPlnAdmin">
                        Descripcion: {pln.description}
                      </h3>
                      <h3 className="letraPlnAdmin">Fecha: {pln.fecha}</h3>
                      <Link
                        to={`/planificar/${pln._id}`}
                        className="accesoAdmPlanning"
                      >
                        ver el Planning
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cajaEnlaceAdmPLanning">
              <Link to="/newPLan" className="enlaceAdmPlanning">
                <TbColorPicker />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Card className="fondoPlanUs">
            <CardBody>
              <CardTitle tag="h2" className="tituloPlnUs ">
                Tus Planificadores
              </CardTitle>
              {plan.map((pln) => {
                return (
                  <CardBody key={pln._id} className="descripcionPlanUs">
                    <CardText className="txtPlnUs">
                      Titulo: {pln.title}
                    </CardText>
                    <CardText className="txtPlnUs">
                      Descripción: {pln.description}
                    </CardText>
                    <CardText className="txtPlnUs">Fecha: {pln.fecha}</CardText>
                    <Link
                      to={`/planificar/${pln._id}`}
                      className="accesoUsPlanning"
                    >
                      Ver el Planning
                    </Link>
                  </CardBody>
                );
              })}
            </CardBody>
            <Link to="/newPLan" className="addPlnUs">
              <CiPen />
            </Link>
          </Card>
        </>
      )}
    </>
  );
};

export default TodosLosPlanificadores;
