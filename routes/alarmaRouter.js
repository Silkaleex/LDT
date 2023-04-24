const express = require("express");
const alarma = require("../models/alarma");
const alarmaRouter = express.Router();
const User = require("../models/User");
const UserRouter = require("./UserRouter");
const auth = require("../middeleware/auth");

alarmaRouter.post("/alarms", auth, async (req, res) => {
  try {
    const { title, alarm, fecha } = req.body;
    let userId = await User.findById(req.user.id);

    if (!title || !alarm || !fecha) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    if (title.length < 3) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    if (title.length > 30) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    let newAlarma = new alarma({
      title,
      alarm,
      fecha,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: {
        alarma: newAlarma._id,
      },
    });

    await newAlarma.save();

    return res.status(200).send({
      success: true,
      message: "Tus datos se han guardado correctamente",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
alarmaRouter.get("/alarms", auth, async (req, res) => {
  try {
    let alarm = await alarma.find({}).populate();
    if (!alarm) {
      return res.status(400).send({
        success: false,
        message: "Eventos no encontrados",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tus eventos fueron Encontrados correctamente",
      alarm,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
alarmaRouter.get("/alarms/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let alarms = await alarma.findById(id).populate({
      path: "user",
      select: "name ",
    });
    if (!alarms) {
      return res.status(400).send({
        success: false,
        message: "Alarma no encontrada",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tu Alarma fue Encontrada correctamente",
      alarms,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
alarmaRouter.put("/alarms/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { alarm, fecha } = req.body;

    await alarma.findByIdAndUpdate(id, {
      alarm,
      fecha,
    });
    if (!alarm || !fecha) {
      return res.status(400).send({
        succcess: false,
        message: "No completastes todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Alarma modificado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
UserRouter.delete("/alarms/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await alarma.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "No se a encontrado la Evento que buscabas",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tu Evento ha sido eliminado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = alarmaRouter;
