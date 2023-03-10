const express = require("express");
const UserRouter = express.Router();
const user = require("../models/user");

UserRouter.post("/register", async (req, res) => {
  const { name, surname, email, password, age, direction, phone } = req.body;
  try {
    let userFind = await user.findOne({ email });
    if (userFind) {
      return res.status(400).send({
        sucess: false,
        message: "usuario ya registrado",
      });
    }
    if (
      !name ||
      !surname ||
      !email ||
      !password ||
      !age ||
      !direction ||
      !phone
    ) {
      return res.status(400).send({
        sucess: false,
        message: "No Completastes todos los pasos",
      });
    }
    if (name.length < 3) {
      res.status(400).send({
        sucess: false,
        message: "Nombre demasiado corto",
      });
    }
    if (name.length > 15) {
      res.status(400).send({
        sucess: false,
        message: "Nombre demasiado largo",
      });
    }
    let myUser = new user({
      name,
      surname,
      email,
      password,
      age,
      direction,
      phone,
    });
    await myUser.save();
    return res.status(200).send({
      sucess: true,
      message: "Usuario creado correctamente",
      myUser,
    });
  } catch (error) {
    res.status(500).send({
      sucess: false,
      message: error.message,
    });
  }
});

UserRouter.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    let User = await user
      .findById(userId)
      .select("name surname password email phone ");
    if (!User) {
      return res.status(400).send({
        success: false,
        message: "Usuario no definido",
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
module.exports = UserRouter;
