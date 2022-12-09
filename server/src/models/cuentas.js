const mongoose = require("mongoose");

const cuentaSchema = mongoose.Schema({
  rut: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,

  },
  admin: {
    type: Boolean,
    required: true
  },
 

},
  
  {collection: 'Cuentas', versionkey: false }
);

module.exports = mongoose.model('Cuentas', cuentaSchema);