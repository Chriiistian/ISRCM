const mongoose = require("mongoose");

const cuentaSchema = mongoose.Schema({
  admin: {
    type: Boolean,
    required: true
  },

  correo: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,

  }

},
  
  {collection: 'Cuentas', versionkey: false }
);

module.exports = mongoose.model('Cuentas', cuentaSchema);