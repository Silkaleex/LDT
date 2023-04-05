const User = require("../models/User");
/**
 * Esta función se ejecuta, después de ejecutarse
 * la función del auth.js,
 * quiere decir, después de comprobar que el usuario está logueado
 */
const authAdmin = async (req, res, next) => {
  try {
    // busco el usuario logueado por su id
    // que me viene devuelto en el req.user
    // me viene devuelto del token
    const user = await User.findOne({
      _id: req.user.id,
    });

    // si no encuentra el usuario, devolvemos un error
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }
    // 1
    //si me encuentra el usuario,
    //accedemos a su propiedad role y comprobamos si es 0
    // si es 0, quiere decir que el user es un usuario normal
    if (user.role === 0) {
      return res.status(400).json({
        success: false,
        message: "Acceso denegado, no eres admin",
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authAdmin;
/**
 * 1. añadimos propiedad "role" al modelo de usuario, 
      por default va a coger el valor 0 
 * 2. creamos el middleware 
 * 3. importamos la función creada en la ruta en cada router que la necesitemos 
 * 4. importamos el authAdmin, en cada ruta requerida
 ( ruta que va a ser privada para el admin, 
  después de importar el primer middleware que me comprueba
   si el user está logueado. 
 */
