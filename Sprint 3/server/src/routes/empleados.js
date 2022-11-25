const express = require("express");
const empleadosShema = require("../models/empleados.js");

const router = express.Router();


// get all users
router.get("/empleado", (req, res) => {
    empleadosShema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // get a user
  router.get("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadosShema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;
  
