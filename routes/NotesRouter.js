const express = require("express");
const Notes = require("../models/Notes");
const NotesRouter = express.Router();
const User = require("../models/User");
const auth = require("../middeleware/auth");


NotesRouter.get("/toNotas", auth, async (req, res) => {
  try {
    let Notas = await Notes.find({}).populate()
    if (!Notas) {
      return res.status(400).send({
        success: false,
        message: "Notas no encontradas",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tus Notas fueron encontradas correctamente",
      Notas,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
NotesRouter.post("/notas", auth, async (req, res) => {
  try {
    const { title, tareas, fecha } = req.body;
    let userId = await User.findById(req.user.id);
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "No estas logeado",
      });
    }
    if (!title || !tareas || !fecha) {
      return res.status(400).send({
        success: false,
        message: "No has completado todos los campos",
      });
    }

    if (title.length < 3) {
      return res.status(400).send({
        success: false,
        message: "No has completado todos los campos",
      });
    }
    if (title.length > 30) {
      return res.status(400).send({
        success: false,
        message: "No has completado todos los campos",
      });
    }
    if (fecha.length < 8) {
      return res.status(400).send({
        success: false,
        message: "No has completado todos los campos",
      });
    }

    let newNotes = new Notes({
      title,
      tareas,
      fecha,
    });

    await User.findByIdAndUpdate(userId, {
      $push: {
        notes: newNotes._id,
      },
    });

    await newNotes.save();

    return res.status(200).send({
      success: true,
      message: "Notas creadas correctamente",
      newNotes,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

NotesRouter.get("/notas/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let notas = await Notes.findById(id).populate({
      path: "user",
      select: "name surname",
    });
    if (!notas) {
      return res.status(400).send({
        success: false,
        message: "Notas no encontradas",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Notas encontradas con exito",
      notas,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
NotesRouter.put("/notas/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, tareas, fecha } = req.body;

    await Notes.findByIdAndUpdate(id, { title, tareas, fecha });
    if (!title || !tareas || !fecha) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Notas modificadas con exito",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
NotesRouter.delete("/notas/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await Notes.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "No se a encontrado la nota que buscabas",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tu nota ha sido eliminada",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
module.exports = NotesRouter;
