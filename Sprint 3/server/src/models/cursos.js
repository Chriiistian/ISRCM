const mongoose = require("mongoose");

const cursoSchema = mongoose.Schema({
  _id:{
    type: String,
    required: true,
  },
  hrs_teoricas: {
    type: Number,
    required: true,
  },
  hrs_practicas: {
    type: Number,
    required: true,
  
  },
  hrs_e_learning: {
    type: Number,
    required: true
  },
  hrs_totales: {
    type: Number,
    required: true,
  
  },
  area: {
    type: String,
    required: true,
  },
  modalidad:{
    type: String,
    required: true,
  },
  nombre_curso: {
    type: String,
    required: true,
  }


},
  
  {collection: 'Cursoss', versionkey: false }
);

module.exports = mongoose.model('Cursoss', cursoSchema);