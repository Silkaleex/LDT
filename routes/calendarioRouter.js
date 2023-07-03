const express = require("express");
const calendario = require("../models/calendario");
const calendarRouter = express.Router();
const User = require("../models/User");
const auth = require("../middeleware/auth");

calendarRouter.post("/calendars", auth, async (req, res) => {
  try {
    const { title, calendar, fecha, tipo } = req.body;
    let userId = await User.findById(req.user.id);

    if (!title || !calendar || !fecha || !tipo ||title.length < 3) {
      return res.status(400).send({
        success: false,
        message: "No completaste todos los pasos",
      });
    }

    let newCalendar = new calendario({
      title,
      fecha,
      calendar,
      tipo,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: {
        calendar: newCalendar._id,
      },
    });

    await newCalendar.save();
    if (tipo === 'privado') {
      newCalendar.solicitud = true;
    }
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

calendarRouter.get("/calendars/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let calendars = await calendario.findById(id).populate({
      path: "user",
      select: "name",
    });
    if (!calendars) {
      return res.status(400).send({
        success: false,
        message: "Eventos no encontrados",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tus eventos fueron Encontrados correctamente",
      calendars,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
calendarRouter.put("/calendars/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, calendar, fecha } = req.body;

    await calendario.findByIdAndUpdate(id, {
      title,
      calendar,
      fecha,
    });

    if (!title || !fecha) {
      return res.status(400).send({
        succcess: false,
        message: "No completastes todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "evento modificado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
calendarRouter.delete("/calendars/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await calendario.findByIdAndDelete(id);
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


calendarRouter.get("/calendars", auth, async (req, res) => {
  try {
    const calendars = await calendario.find().populate({
      path: "user",
      select: "name",
    });

    return res.status(200).send({
      success: true,
      message: "Eventos encontrados correctamente",
      calendars,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});


module.exports = calendarRouter;