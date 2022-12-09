
const mongoose = require("mongoose");

const empleadosShema = mongoose.Schema({
    _id:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required: true
    },
    nombre:{
        type:String,
        required:true
    },
    departamento:{
        type:String,
        required:true
    },
    cargo:{
        type:String,
        required:true
    },
    fecha_comienzo:{
        type:Date,
        required:true
    },
    fecha_nacimiento:{
        type:Date,
        required:true
    },
    edad:{
        type: Number,
        required:true
    },
    rut:{ //la agrege para verempleados(ya que pedia rut)
        type:String,
        required:true
    }
},
{collection: 'Empleadoss', versionkey: false }
);

module.exports = mongoose.model('Empleadoss', empleadosShema);