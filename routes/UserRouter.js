const express = require("express");
const UserRouter = express.Router();
const user = require("../models/User");
//importamos jsonwebtoken
const jwt = require("jsonwebtoken");
//importamos el middelware
const auth = require("../middeleware/auth");
const authAdmin = require("../middeleware/authAdmin");
//importamos dependencia par anecriptar la contraseña
const bcrypt = require("bcrypt");
//Declarar las vueltas que quiero que de mi contraseña
//Recomendado es 10 por que es una contraseña muy segura con 10 vueltas
const salt = bcrypt.genSaltSync(10);

//otro metodo de ponerlo
// const salt1 = 10;
// const salt2 = bcrypt.genSaltSync(salt1);

const createToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "7d" });
};

UserRouter.post("/register", async (req, res) => {
  const { name, surname, password, email } = req.body;
  try {
    let userFind = await user.findOne({ name, surname });
    if (userFind) {
      return res.status(400).send({
        sucess: false,
        message: "usuario ya registrado",
      });
    }
    if (!name || !surname || !password || !email) {
      return res.status(400).send({
        sucess: false,
        message: "No Completastes todos los pasos",
      });
    }
    if (name.length < 3) {
      res.status(400).send({
        sucess: false,
        message: "No Completastes todos los pasos",
      });
    }
    if (name.length > 15) {
      res.status(400).send({
        sucess: false,
        message: "No Completastes todos los pasos",
      });
    }
    //encriptar contrasña - Se hace antes de crear el usuario
    let passwordHash = bcrypt.hashSync(password, salt);

    let myUser = new user({
      name,
      surname,
      email,
      //tengo que pasarle a la contraseña del usuario,la contraseña haseada(encriptada)
      password: passwordHash,
    });
    await myUser.save();

    const accessToken = createToken({ id: myUser._id });

    return res.status(200).send({
      sucess: true,
      message: "Usuario creado correctamente",
      myUser,
      accessToken,
    });
  } catch (error) {
    res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});

//Haciendo un login de usuario
UserRouter.post("/login", async (req, res) => {
  try {
    //pasamos por el body los datos que quiero o que necesita el usuario para logearse
    const { email, password } = req.body;
    //busco al usuario en nuestra base de datos con el email que me llega por el body
    const User = await user.findOne({ email });

    //condicion de baneo
    if (user.banned === true) {
      return res.status(400).send({
        success: false,
        message: `${user.name}, tu cuenta ha sido bloqueda`,
      });
    }

    //Si no me encuentra el usuario, me devuelve el mensaje que yo le haya puesto abajo
    if (!User) {
      return res.status(400).send({
        success: false,
        message: "Lo sentimos algo no funciono correctamente",
      });
    }

    //comparo la contraseña que me llega por el body con contraseña que tengo en mi base de datos
    //este paso se ejecuta siempre y cuando me encuentre el ussuario en la base de datos
    const passwordOk = bcrypt.compareSync(password, User.password);
    if (!passwordOk) {
      return res.status(400).send({
        success: false,
        message: "Lo sentimos algo no funciono correctamente",
      });
    }
    /**
     * el token genera antes de volver a enviar la respuesta de la ruta
     * declaramos una nueva variable que le asignamos la llamada
     * a lafuncion que me crea el token, y a esta funcion me pase como argumento al id del usuario
     */
    const accessToken = createToken({ id: User._id });

    return res.status(200).send({
      success: true,
      message: "Login Correcto",
      User,
      accessToken,
      /**
       * accessToken es importantisimo que el token devuelva
       * en el body de la respuesta,
       * ya que si no me lo devuelve no podre utilizar la aplicación
       * con las rutas privadas
       */
    });
  } catch (error) {
    return res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});

//banear a un usuario
UserRouter.post("/users_ban/:id", auth, authAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const User = await user.findById(id);

    if (!User) {
      return res.status(404).send({
        success: false,
        message: "Usuario no encontrado",
      });
    }
    if (User.banned === true) {
      return res.status(400).send("El usuario está baneado");
    }
    user.banned = true;
    await User.save();
    return res.status(200).send({
      success: true,
      message: `El usuario ${User.name} ha sido baneado`,
    });
  } catch (err) {
    return res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});

UserRouter.put("/users_desban/:id", auth, authAdmin, async (req, res) => {
  // Obtener el ID del usuario de la URL
  const { userId } = req.params;

  try {
    // Actualizar la propiedad "banned" del usuario a false
    const updatedUser = await user.findByIdAndUpdate(
      userId,
      { banned: false },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(200).send({
        success: true,
        message: `El usuario ha sido desbaneado exitosamente`,
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
//Ruta de coger un solo usuario(producto, lojamiento,rerserva,vendedor,etc)
//Ruta para ver mi perfil de usuario
/**
 *nueva implementacion de ruta privada con token
 añadimos el middelwarte de autentificacion
 */
UserRouter.get("/user", auth, async (req, res) => {
  try {
    let User = await user.findById(req.user.id)//.populate();
    if (!User) {
      return res.status(400).send({
        success: false,
        message: "Usuario no encontrado",
      });
    }
    return res.status(200).send({
      success: true,
      message: "usuario encontrado correctamente",
      User,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
UserRouter.delete("/user", auth, async (req, res) => {
  try {
    await user.findByIdAndDelete(req.user.id);
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "No se a encontrado al usuario",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Usuario eliminado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
UserRouter.delete("/user/:id", auth, authAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Usuario no registrado",
      });
    }
    return res.status(400).send({
      success: true,
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = UserRouter;

//BCRYPT - es una dependencia que nos ayuda a hash / encriptar nuestra contraseña
//escriptar en la base de datos que no es la real
