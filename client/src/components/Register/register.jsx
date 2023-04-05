import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";
const register = () => {
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({
    name: "",
    surname: "",
    password: "",
    email: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [successM, setSuccessM] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorM, setErrorM] = useState(null);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        ...user,
      });
      console.log(response.data);
      setSuccessM(response.data.message);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("name", response.user.name);
      localStorage.setItem("role", response.user.role);

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      setErrorM(error.response.data.message);
    }
  };
  return (
    <>
      <div className="caja1">
        <div className="subcaja1">
          <h1 className="tituloPrin">
           Estas a punto de ser uno mas!
          </h1>
          <Form onSubmit={registerSubmit} className="form">
            <FormGroup>
              <Label for="exampleName" className="nombreLabel">
                Name
              </Label>
              <Input
                name="name"
                value={user.name}
                placeholder="name"
                type="name"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="exampleSurname" className="nombreLabel">
                Surname
              </Label>
              <Input
                name="surname"
                value={user.surname}
                placeholder="surname"
                type="surname"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword" className="nombreLabel">
                Password
              </Label>
              <Input
                name="password"
                value={user.password}
                placeholder="password"
                type="password"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="exampleEmail" className="nombreLabel">
                Email
              </Label>
              <Input
                name="email"
                value={user.email}
                placeholder="email"
                type="email"
                onChange={onChangeInput}
              />
            </FormGroup>{" "}
            <Button className="botonEnvio">Submit</Button>
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
          <Link to="/login">
            <Button className="botonLogin">Accede a tu cuenta</Button>
          </Link>
          <Link to="/">
            <Button className="botonLogin">Volver a Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default register;
