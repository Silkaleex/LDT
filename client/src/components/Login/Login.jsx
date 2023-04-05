import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import{Link} from 'react-router-dom'
import "./Login.css";
//hacer llamada al backend - axios
import axios from "axios";
//useState
//creamos una variable login
const login = () => {
  //Cogemos los datos del backend de nuestra peticion Post de login
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //creamos los datos para cuando nos logeamos nos envie un mensaje
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [successM, setSuccessM] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorM, setErrorM] = useState(null);
  //aparte de rellenar los datos de login, y que me verifique los datos en el submit
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      //llamamos la petición del backend
      const response = await axios.post("http://localhost:5000/api/login", {
        ...user,
      });
      console.log(response);
      setSuccessM(response.data.message);
      //Guardamos informacion del usuario en la memoria del navegador
      localStorage.setItem("token",response.data.accessToken);
      localStorage.setItem("name", response.data.User.name);
      localStorage.setItem("role", response.data.User.role);

      //refresca el navegador
      setTimeout(() => {
        window.location.href = "/usuario";
      }, 3000);
    } catch (error) {
      //error en caso de que no lo verifique
      setErrorM(error.response.data.message);
      //intenta logearme de nuevo
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
  };
  return (
    <>
      <div className="caja">
        <div className="contenido">
          <h1 className="titulo">¡Bienvenido a LDT!</h1>
          <Form onSubmit={loginSubmit} className="formulario">
            <FormGroup >
              <Label className="titleLabel">
                Email
              </Label>
              <Input
                name="email"
                value={user.email}
                placeholder="Email"
                type="email"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
            <FormGroup >
              <Label className="titleLabel">
                Password
              </Label>
              <Input
                name="password"
                value={user.password}
                placeholder="Password"
                type="password"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
          <Button className="botonSubmit">Enviar</Button>
          </Form>

          <div
            className="alertaAzul"
            style={{ display: successM ? "block" : "none" }}
          >
            {successM}
          </div>
          <div
            className="alertaRoja"
            style={{ display: errorM ? "block" : "none" }}
          >
            {errorM}
          </div>
            <Link to="/register"><Button className="botonSubmit1">¿No tienes cuenta?, Hazte Usuario</Button></Link>
            <Link to="/"><Button className="botonSubmit1">Volver a Home</Button></Link>
        </div>
      </div>
    </>
  );
};

export default login;
