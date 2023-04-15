import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import "./planificador.css"

function Planificador() {
  const [plan, setPlan] = useState([]);
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");
  const getPlan = async () => {
    const response = await axios.get("http://localhost:5000/api/toCalen", {
      headers: {
        Authorization: token,
      },
    });
   console.log(response.data.calendars);
   setPlan(response.data.calendars);
  }
   useEffect(() => {
    getPlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <>
      <div className="fondoPlanAdm">
      <div className="contenedorPlanAdm">
        <h1 className="tituloPlanAdm">Sobre ti</h1>
        <div className="contenidoPlanAdm">
          {plan.map((Plan) => {
            return (
              <div key={Plan._id}>
                <Link to={`/Plan/${Plan._id}`} className="enlacesPLanAdm">
                  <h2>{Plan.title}</h2>
                  <h3>{Plan.planificador}</h3>
                </Link>
                  {" "}
                  <AiFillDelete className="eliminarPlanAdm"/>
             
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
    );
  }
export default Planificador