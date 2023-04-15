import React, { useEffect } from "react";
import {BsFillHeartFill}  from "react-icons/bs";
import './Logout.css'
const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href='/'
        },3000)
    })
    
  return (
    <div className="imagenFondoLogout">
        <h1 className="textoLogout"><BsFillHeartFill className="icnLogEd"/> Esperemos volver a verte Pronto <BsFillHeartFill className="icnLogEd"/></h1>
    </div>
  )
}

export default Logout