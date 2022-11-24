const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({

  nombre_grupo: {
    type: String,
    required: true,
  },
  empleados: {
    type: Object,
    required: true,

  },
  curso: {
    type: Object,
    required: true
  },
  fecha_inicio:{
    type: String,
    required: true
  },
  fecha_fin:{
    type: String,
    required: true
  }

},
  
  {collection: 'Grupos', versionkey: false }
);

module.exports = mongoose.model('Grupos', groupSchema);


