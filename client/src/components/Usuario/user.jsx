import React, { useState, useEffect } from "react";
import axios from "axios";
import TodasLasAlarmas from "../Eventos/TodasLasAlarmas";
import TodosLosCalendar from "../Eventos/TodosLosCalendar";
import TodosLosPlanificadores from "../Planificador/todosLosPlanificadores";
import TodasLasNotas from "../Notas/TodasLasNotas";
const User = () => {
  const [User, setUser] = useState({});
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // const getUser = async()=>{
  //     const response = await axios.get("http://localhost:5000/api/user",{
  //         headers:{
  //             Authorization:token
  //         }
  //     })
  //     // console.log(response)
  //     setUser(response.data.User)

  // }
  // useEffect(()=>{
  //     getUser()
  // },[])
  //console.log(User)
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:5000/api/user", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setUser(response.data.User);
    };
    getUser();
  }, []);

  return (
    <>
      {role == 1 ? (
        <>
        <div className="scroll" style={{overflow: 'hidden'}}>
          <TodasLasNotas />
          <TodosLosCalendar />
          <TodasLasAlarmas />
          <TodosLosPlanificadores />
          </div>
        </>
      ) : (
        <>
        <div className="scroll" style={{overflow: 'hidden'}}>
        <TodasLasNotas />
        <TodosLosCalendar />
        <TodasLasAlarmas />
        <TodosLosPlanificadores />
        </div>
      </>
      )}
    </>
  );
};
export default User;
