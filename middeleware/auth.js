/**
 * importamos la dependencia de jsonwebtoken
 */
const jwt = require("jsonwebtoken");

/**
 * req:request
 * res:response
 * next:() el bloque o codigo que lleva escrito antes
 * pasa el control y sigue su tarea
 */

const auth = (req, res, next) => {
  try {
    //recogemos del header el token que nos envia el usuario
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).send({
        success: false,
        message: "Invalid Authentification(falta token)",
      });
    }
    /**
     * si tenemos el token lo tenemos que verificar
     * y lo tenemos que decodificar para que nos devuelva
     * toda la informacion del usuario logeado
     */

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, user) => {
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Invalid Authentification(token no valido)",
        });
      }
      //Si todo va bien pasamos el control al siguiente bloque de codigo
      req.user = user;
      /**
       * donde yo necesite verificar o coger mi id, como usuario logeado
       * en vez de hacerlo con req.params(pasando el id)
       * lo hare con req.user
       */
      next();
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = auth;
