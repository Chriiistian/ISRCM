const express = require("express");
const cursoSchema = require("../models/cursos.js");

const router = express.Router();

// create user
router.post("/curso", (req, res) => {
    const user = cursoSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all users
router.get("/curso", (req, res) => {
    cursoSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // get a user
  router.get("/curso/:id", (req, res) => {
    const { id } = req.params;
    cursoSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // delete a user
  // router.delete("/cursos/:id", (req, res) => {
  //   const { id } = req.params;
  //   cursoSchema
  //     .remove({ _id: id })
  //     .then((data) => res.json(data))
  //     .catch((error) => res.json({ message: error }));
  // });
  
  // update a user
  // router.put("/cursos/:id", (req, res) => {
  //   const { id } = req.params;
  //   const { name, age, email } = req.body;
  //   cursoSchema
  //     .updateOne({ _id: id }, { $set: { name, age, email } })
  //     .then((data) => res.json(data))
  //     .catch((error) => res.json({ message: error }));
  // });

module.exports = router;