import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./planificador.css";
import { TbTrash } from "react-icons/tb";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
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
    setPlanning(response.data.plan);
  };
  useEffect(() => {
    getPlanning();
  }, []);
  const deleteNota = async (e) => {
    e.preventDefault();
    let opcion = window.confirm("¿Estas seguro de borrar el Planificador?");
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
        setTimeout(() => {
          navigate("/usuario");
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
              <h2>Titulo: {planning.title}</h2>
              <h3>Descripción: {planning.description}</h3>
              <div className="cajaBotonesAdm">
                <Link to="/usuario" className="botonAdm">
                  Volver
                </Link>
                <Link
                  to={`/modifyPlan/${planificadorId}`}
                  className="modificarNoAdm"
                >
                  Modificar Planificador
                </Link>
                <button className="botonDelAdmPln" onClick={deleteNota}>
                  <TbTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Card className="fondoPlnUs">
            <CardBody className="descripcionPlnUs">
              <CardTitle tag="h2" className="tituloPlnUsu">
                Descripcion del Planning:
              </CardTitle>
              <CardText className="textoPlnUsu">
                Titulo: {planning.title}
              </CardText>
              <CardText className="textoPlnUsu">
                Descripción: {planning.description}
              </CardText>
              <Link to="/usuario" className="botonUs">
                Volver
              </Link>
              <Link
                to={`/modifyPlan/${planificadorId}`}
                className="modificarPlnUs"
              >
                Modificar Planificador
              </Link>
              <Link onClick={deleteNota} className="botonPlnUs">
                <TbTrash />
              </Link>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
}

export default Planificador;
