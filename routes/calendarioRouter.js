const express = require("express");
const calendario = require("../models/calendario");
const calendarRouter = express.Router();
const User = require("../models/User");
const auth = require("../middeleware/auth");

calendarRouter.post("/calendars", auth, async (req, res) => {
  try {
    const { title, calendar } = req.body;
    let userId = await User.findById(req.user.id);

    if (!title || !calendar) {
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
    
    let newCalendar = new calendario({
      title,
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
calendarRouter.get("/calendars/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let calendars = await calendario.findById(id).populate({
      path: "user",
      select: "name ",
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
    const { title, calendar } = req.body;

    await calendario.findByIdAndUpdate(id, {
      title,
      calendar,
    });

    if (!title || !calendar) {
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
module.exports = calendarRouter;
