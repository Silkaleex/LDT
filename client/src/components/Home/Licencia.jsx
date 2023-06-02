import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Licencia.css";
import { CardBody, CardSubtitle, CardTitle, Card, CardText } from "reactstrap";
import { AiOutlineArrowLeft, AiOutlineCopyright } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsEnvelopeFill,
  BsChatRightTextFill,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Licencia = () => {
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
        window.location.href = "/";
      }, 3000);
      return;
    }

    emailjs
      .sendForm(
        "service_4h8c9cv",
        "template_6qancni",
        e.target,
        // "ZzHJiehSC1Ky4LVqZ"
      )
      .then(() => {
        setIsSent(
          "Mensaje enviado con éxito. Te responderemos lo antes posible."
        );
        setTimeout(() => {
          window.location.href = "/";
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
    <div className="fondoLicencia">
      <Card className="LicenciaLDT">
        <CardBody>
          <CardTitle className="text-center" tag="h3">
            Sobre LDT
          </CardTitle>
          <CardSubtitle className="text-center mb-4" tag="h4">
            Con grandes cualidades
          </CardSubtitle>
          <CardText>
            LDT es una solución innovadora que ha sido diseñada para simplificar
            la vida cotidiana de las personas. Con su interfaz intuitiva y sus
            características inteligentes, LDT es una herramienta poderosa que
            ayuda a los usuarios a alcanzar sus metas de manera eficiente y
            efectiva.
          </CardText>
          <CardText>
            Desde la gestión del tiempo y la productividad, hasta la
            organización y el seguimiento de proyectos, LDT se adapta
            perfectamente a las necesidades de los usuarios. Ofrece una amplia
            gama de funciones personalizables que permiten a los usuarios
            adaptar la aplicación a sus propias preferencias y necesidades, lo
            que la hace verdaderamente única.
          </CardText>
          <CardText>
            Además, LDT cuenta con un equipo de soporte dedicado que se asegura
            de que los usuarios tengan una experiencia de usuario excepcional.
            Siempre están dispuestos a brindar asistencia y responder a
            cualquier pregunta o inquietud que puedan tener los usuarios.
          </CardText>
          <CardText>
            Con su enfoque en la usabilidad, la eficiencia y la personalización,
            LDT se ha convertido en una herramienta indispensable para aquellos
            que buscan maximizar su productividad y alcanzar sus metas con
            éxito.
          </CardText>
        </CardBody>
      </Card>
      <div className="fondoLicencia">
        <Card className="LicenciaLDT">
          <CardBody>
            <CardTitle className="text-center" tag="h3">
              Licencia de LDT
            </CardTitle>
            <CardText>
              Por la presente, se otorga una licencia de uso no exclusiva,
              intransferible y limitada para utilizar LDT sujeto a los términos
              y condiciones establecidos a continuación:
            </CardText>
            <CardText>
              1. Uso Personal: El Usuario tiene derecho a utilizar la Aplicación
              únicamente con fines personales y no comerciales. No se permite el
              uso de la Aplicación para actividades comerciales o lucrativas sin
              previa autorización por escrito del titular de la licencia.
            </CardText>
            <CardText>
              2. Derechos de Propiedad: La Aplicación y todos los derechos de
              propiedad intelectual asociados, incluyendo pero no limitándose a
              derechos de autor, marcas comerciales y patentes, son propiedad
              exclusiva del titular de la licencia. El Usuario se compromete a
              no realizar ninguna acción que pueda infringir los derechos de
              propiedad del titular de la licencia.
            </CardText>
            <CardText>
              3. Copia y Modificación: El Usuario no tiene derecho a copiar,
              modificar, distribuir, transmitir, sublicenciar, traducir,
              adaptar, descompilar, desensamblar o realizar ingeniería inversa
              sobre la Aplicación o cualquier parte de la misma, excepto en la
              medida en que dichas restricciones estén expresamente prohibidas
              por la ley aplicable.
            </CardText>
            <CardText>
              4. Actualizaciones y Soporte: El titular de la licencia puede
              proporcionar actualizaciones y soporte para la Aplicación a su
              exclusivo criterio, sin ninguna obligación de hacerlo. El Usuario
              no tiene derecho a exigir actualizaciones o soporte, a menos que
              se establezca expresamente en un acuerdo por separado.
            </CardText>
            <CardText>
              5. Responsabilidad: La Aplicación se proporciona "tal cual" y el
              Usuario la utiliza bajo su propio riesgo. El titular de la
              licencia no será responsable de ningún daño directo, indirecto,
              incidental, especial o consecuencial que resulte del uso o la
              imposibilidad de uso de la Aplicación, incluyendo pero no
              limitándose a pérdida de datos, interrupción del negocio o
              cualquier otro daño pecuniario o de otro tipo.
            </CardText>
            <CardText>
              6. Terminación: Esta licencia puede ser terminada por el titular
              de la licencia en cualquier momento y sin previo aviso si el
              Usuario incumple cualquiera de los términos y condiciones
              establecidos en este acuerdo. En caso de terminación, el Usuario
              deberá dejar de utilizar la Aplicación y destruir todas las copias
              de la misma en su posesión.
            </CardText>
            <CardText>
              Ley Aplicable: Este acuerdo se regirá e interpretará de acuerdo
              con las leyes del España donde se encuentra el titular de la
              licencia, sin tener en cuenta conflictos de leyes. Cualquier
              disputa que surja en relación con este acuerdo se someterá a la
              jurisdicción exclusiva de los tribunales competentes en España de
              lo mencionado.
            </CardText>
            <CardText>
              Al utilizar la Aplicación, el Usuario acepta todos los términos y
              condiciones establecidos en este acuerdo. Si no está de acuerdo
              con alguno de los términos o condiciones, por favor no utilice la
              Aplicación." Ten en cuenta que este es solo un ejemplo de un texto
              de licencia y es importante consultar a un profesional legal para
              obtener mas información.
            </CardText>
            <div className="formularioLicn">
              <CardTitle className="text-center tituloLcn" tag="h2">
                ¿Necesitas Ayuda?, Escribenos!
              </CardTitle>
              <form ref={form} onSubmit={sendEmail} className="formularioLcn">
                <label>
                  Name <BsFillPersonFill />
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="colorInpLcn"
                  onChange={(e) => setName(e.target.value)}
                />
                <label>
                  Email <BsEnvelopeFill />
                </label>
                <input
                  type="email"
                  name="email"
                  className="colorInpLcn"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>
                  Message <BsChatRightTextFill />
                </label>
                <textarea
                  name="message"
                  maxLength="300"
                  className="txtMsgLcn colorInpLcn"
                  placeholder="maximo 300 caracteres"
                  onChange={(e) => setMessage(e.target.value)}
                />
                {isSent && <div className="mensajeCorrecto">{isSent}</div>}
                {errorMessage && (
                  <div className="mmensajeErroneo">{errorMessage}</div>
                )}
                <input type="submit" value="Send" className="botonMsjLcn" />
              </form>
            </div>
            <div>
              <Link to="/" className="btnLcn">
                <AiOutlineArrowLeft />
                Volver
              </Link>
            </div>
          </CardBody>
        </Card>
        <footer className="footerLcn">
          Todos los derechos reservados Silkaleex <AiOutlineCopyright />
        </footer>
      </div>
    </div>
  );
};
export default Licencia;
