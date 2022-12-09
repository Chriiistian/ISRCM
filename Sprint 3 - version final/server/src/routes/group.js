const express = require("express");
const empleados = require("../models/empleados.js");
const groupSchema = require("../models/group.js");

const router = express.Router();

// create user      --CREAR GRUPO
router.post("/grupo", (req, res) => {
    const user = groupSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all users
router.get("/grupo", (req, res) => {
    groupSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/grupo/empleado/:rut", (req, res) => {  
    const { rut } = req.params;
    groupSchema
      .find({empleados:{$elemMatch:{['Rut']: rut}}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
 
  // get a user
  router.get("/grupo/:id", (req, res) => {
    const { id } = req.params;
    groupSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // delete a user      --ACCION ELIMMINARR
  router.delete("/grupo/:id", (req, res) => {
    const { id } = req.params;
    groupSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // update a user
  router.put("/grupo/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_grupo, empleados, curso, fecha_inicio, fecha_fin } = req.body;
    groupSchema
      .updateOne({ _id: id }, { $set: { nombre_grupo, empleados, curso, fecha_inicio, fecha_fin } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;