import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DelUs.css";
import { TbTrash } from "react-icons/tb";
const DelUs = () => {
  const token = localStorage.getItem("token");
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    setUsuarios(response.data.Users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async(idUser)=>{
      localStorage.setItem("idUsuario",idUser)
      let opcion = window.confirm("¿Estas Seguro de Eliminar a este Usuario?")
      if(opcion == true){
          const response = await axios.delete(`http://localhost:5000/api/user/${idUser}`,{
              headers:{
                Authorization:token
              }
            })
            console.log(response)
      }
  }

  return (
    <div className="containerFondoEliminacion">
      {usuarios.map((user) => {
        return (
              <div className="cajaEliminacion" key={user._id}>
                <h3>{user.name}</h3>
                <h3>{user.surname}</h3>
                <h3>{user.email}</h3>
                <button className="btnElmUsuario" onClick={()=>{deleteUser(user._id)}}><TbTrash/></button>
              </div>
          
        );
      })}
    </div>
  );
};

export default DelUs;
