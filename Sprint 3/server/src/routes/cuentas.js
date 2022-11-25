const express = require("express");
const cuentaSchema = require("../models/cuentas.js");

const router = express.Router();

// create user
router.post("/cuenta", (req, res) => {
    const user = cuentaSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all users
router.get("/cuenta", (req, res) => {
    cuentaSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


  // get a user
  router.get("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    cuentaSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // delete a user
  router.delete("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    cuentaSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // update a user
  router.put("/cuenta/:id", (req, res) => {
    const { id } = req.params;
    const { admin, correo, pass } = req.body;
    cuentaSchema
      .updateOne({ _id: id }, { $set: { admin, correo, pass } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;