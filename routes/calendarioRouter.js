const express = require("express");
const calendario = require("../models/calendario");
const calendarRouter = express.Router();
const User = require("../models/User");
const UserRouter = require("./UserRouter");
const auth = require("../middeleware/auth");
const authAdmin = require("../middeleware/authAdmin");


calendarRouter.post("/calendars", auth, async (req, res) => {
  try {
    const { title, alarma, calendar, planificador } = req.body;
    let userId = await User.findById(req.user.id);

    if (!title || !alarma || !calendar || !planificador) {
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
    if (alarma.length != 5) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    if (calendar.length != 10) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    if (planificador.length > 400) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    let newCalendar = new calendario({
      title,
      alarma,
      planificador,
      calendar,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: {
        calendar: newCalendar._id,
      },
    });

    await newCalendar.save();

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
calendarRouter.get("/toCalen", auth, async (req, res) => {
  try {
    let calendars = await calendario.find({}).populate()
    if (!calendars) {
      return res.status(400).send({
        success: false,
        message: "Eventos no encontrados",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tus eventos fueron Encontrados correctamente",
      calendars
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
calendarRouter.put("/calendars/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, alarma, calendar, planificador } = req.body;

    await calendario.findByIdAndUpdate(id, {
      title,
      alarma,
      calendar,
      planificador,
    });
    if (!title || !alarma || !calendar || !planificador) {
      return res.status(400).status({
        succcess: false,
        message: "No completastes todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "evento modificado",
    });
  } catch (error) {
    return res.status(500).status({
      success: false,
      message: error.message,
    });
  }
});
calendarRouter.delete("/calendars/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await calendario.findByIdAndUpdate(id);
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "No se encontro el evento mencionado",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tu evento fue eliminado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
UserRouter.delete("/calendars/:id", auth, authAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Este evento no esta registrado",
      });
    }
    return res.status(400).send({
      success: true,
      message: "Evento eliminado correctamente",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = calendarRouter;
