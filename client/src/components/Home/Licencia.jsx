import React from "react";
import "./Licencia.css";
import { CardBody, CardSubtitle, CardTitle, Card, CardText } from "reactstrap";
import { AiOutlineArrowLeft, AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";
const Licencia = () => {
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
            <h5>
              LDT es una solución innovadora que ha sido diseñada para
              simplificar la vida cotidiana de las personas. Con su interfaz
              intuitiva y sus características inteligentes, LDT es una
              herramienta poderosa que ayuda a los usuarios a alcanzar sus metas
              de manera eficiente y efectiva.
            </h5>
            <h5>
              Desde la gestión del tiempo y la productividad, hasta la
              organización y el seguimiento de proyectos, LDT se adapta
              perfectamente a las necesidades de los usuarios. Ofrece una amplia
              gama de funciones personalizables que permiten a los usuarios
              adaptar la aplicación a sus propias preferencias y necesidades, lo
              que la hace verdaderamente única.
            </h5>
            <h5>
              Además, LDT cuenta con un equipo de soporte dedicado que se
              asegura de que los usuarios tengan una experiencia de usuario
              excepcional. Siempre están dispuestos a brindar asistencia y
              responder a cualquier pregunta o inquietud que puedan tener los
              usuarios.
            </h5>
            <h5>
              Con su enfoque en la usabilidad, la eficiencia y la
              personalización, LDT se ha convertido en una herramienta
              indispensable para aquellos que buscan maximizar su productividad
              y alcanzar sus metas con éxito.
            </h5>
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
              <h5>
                Por la presente, se otorga una licencia de uso no exclusiva,
                intransferible y limitada para utilizar LDT sujeto a los
                términos y condiciones establecidos a continuación:
              </h5>
              <h5>
                1. Uso Personal: El Usuario tiene derecho a utilizar la
                Aplicación únicamente con fines personales y no comerciales. No
                se permite el uso de la Aplicación para actividades comerciales
                o lucrativas sin previa autorización por escrito del titular de
                la licencia.
              </h5>
              <h5>
                2. Derechos de Propiedad: La Aplicación y todos los derechos de
                propiedad intelectual asociados, incluyendo pero no limitándose
                a derechos de autor, marcas comerciales y patentes, son
                propiedad exclusiva del titular de la licencia. El Usuario se
                compromete a no realizar ninguna acción que pueda infringir los
                derechos de propiedad del titular de la licencia.
              </h5>
              <h5>
                3. Copia y Modificación: El Usuario no tiene derecho a copiar,
                modificar, distribuir, transmitir, sublicenciar, traducir,
                adaptar, descompilar, desensamblar o realizar ingeniería inversa
                sobre la Aplicación o cualquier parte de la misma, excepto en la
                medida en que dichas restricciones estén expresamente prohibidas
                por la ley aplicable.
              </h5>
              <h5>
                4. Actualizaciones y Soporte: El titular de la licencia puede
                proporcionar actualizaciones y soporte para la Aplicación a su
                exclusivo criterio, sin ninguna obligación de hacerlo. El
                Usuario no tiene derecho a exigir actualizaciones o soporte, a
                menos que se establezca expresamente en un acuerdo por separado.
              </h5>
              <h5>
                5. Responsabilidad: La Aplicación se proporciona "tal cual" y el
                Usuario la utiliza bajo su propio riesgo. El titular de la
                licencia no será responsable de ningún daño directo, indirecto,
                incidental, especial o consecuencial que resulte del uso o la
                imposibilidad de uso de la Aplicación, incluyendo pero no
                limitándose a pérdida de datos, interrupción del negocio o
                cualquier otro daño pecuniario o de otro tipo.
              </h5>
              <h5>
                6. Terminación: Esta licencia puede ser terminada por el titular
                de la licencia en cualquier momento y sin previo aviso si el
                Usuario incumple cualquiera de los términos y condiciones
                establecidos en este acuerdo. En caso de terminación, el Usuario
                deberá dejar de utilizar la Aplicación y destruir todas las
                copias de la misma en su posesión.
              </h5>
              <h5>
                Ley Aplicable: Este acuerdo se regirá e interpretará de acuerdo
                con las leyes del España donde se encuentra el titular de la
                licencia, sin tener en cuenta conflictos de leyes. Cualquier
                disputa que surja en relación con este acuerdo se someterá a la
                jurisdicción exclusiva de los tribunales competentes en España de lo
                mencionado.
              </h5>
              <h5>
                Al utilizar la Aplicación, el Usuario acepta todos los términos
                y condiciones establecidos en este acuerdo. Si no está de
                acuerdo con alguno de los términos o condiciones, por favor no
                utilice la Aplicación." Ten en cuenta que este es solo un
                ejemplo de un texto de licencia y es importante consultar a un
                profesional legal para obtener mas información.
              </h5>
            </CardText>
            <div className="cajaBoton">
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
