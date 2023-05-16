const express = require("express");
const Planificador = require("../models/planificador");
const planificadorRouter = express.Router();
const User = require("../models/User");
const auth = require("../middeleware/auth");

planificadorRouter.post("/planificador", auth, async (req, res) => {
  try {
    const { title, description, fecha } = req.body;
    let userId = await User.findById(req.user.id);
    // console.log(userId);
    if (!title || !description || !fecha) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }

    if (description.length > 100) {
      return res.status(400).send({
        success: false,
        message: "No completastes todos los pasos",
      });
    }
    let newPlanificador = new Planificador({
      title,
      description,
      fecha,
      user: userId,
    });
    await User.findByIdAndUpdate(userId, {
      $push: {
        planning: newPlanificador._id,
      },
    });

    await newPlanificador.save();

    return res.status(200).send({
      success: true,
      message: "Tu Planificador se guardó correctamente",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
planificadorRouter.get("/planificador/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    let plan = await Planificador.findById(id).populate({
      path: "user",
      select: "name",
    });
    if (!plan) {
      return res.status(400).send({
        success: false,
        message: "Planificador no encontrado",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Tu Planificador fué Encontrado correctamente",
      plan,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
planificadorRouter.put("/planificador/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, fecha } = req.body;

    await Planificador.findByIdAndUpdate(id, { fecha, description });

    if (!fecha || !description) {
      return res.status(400).send({
        succcess: false,
        message: "No completastes todos los campos",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Evento modificado",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
planificadorRouter.delete("/planificador/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await Planificador.findByIdAndDelete(id);
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
module.exports = planificadorRouter;
