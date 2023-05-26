import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./dudas.css";
import { Link } from "react-router-dom";
import {  FormGroup, Label, Input,  } from "reactstrap";

function Dudas() {
  const [isSent, setIsSent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("No completaste todos los campos");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
      return;
    }
    emailjs
      .sendForm(
        "service_6mpx66n",
        "template_ijacezp",
        form.current,
        "ZzHJiehSC1Ky4LVqZ"
      )
      .then(() => {
        setIsSent(
          "Mensaje enviado con éxito. Te responderemos lo antes posible."
        );
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };
  return (
    <>
      <div className="cajaDudasLdt ">
        <div className="conainerDudasLdt">
          <form ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <div className="inputDudasLdt">
                <h1 className="tituloDudasLdt">¿Que necesitas?, Estamos a tu disposición</h1>
                <Label className="labelDudasLdt">Name</Label>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Nombre"
                  onChange={(e) => setName(e.target.value)}
                  className="inputDudasLdt"
                />
              </div>
              <div className="inputDudasLdt">
                <Label className="labelDudasLdt">Email</Label>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputDudasLdt"
                />
              </div>
              <div className="txtDudasLdt">
                <Label>Message</Label>
                <textarea
                  name="message"
                  maxLength="300"
                  placeholder="maximo 300 caracteres"
                  onChange={(e) => setMessage(e.target.value)}
                  className="textDudasLdt"
                />
              </div>
              {isSent && <div className="mensajeCorrectoLDT">{isSent}</div>}
              {errorMessage && (
                <div className="mensajeErroneoLDT">{errorMessage}</div>
              )}
              <div className="conjuntoBtnDudasLdt">
                <Input
                  type="submit"
                  value="Send"
                  className="inputEnvioDudasLdt"
                />
                <Link to="/login" className="btnDudasLdt">
                  Volver
                </Link>
              </div>
            </FormGroup>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dudas;
