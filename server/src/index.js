const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require("dotenv").config();
const cuentaRoutes = require("./routes/cuentas.js")
const cursosRoutes = require("./routes/cursos.js")
const gruposRoutes = require("./routes/group.js")
const empleadosRoutes = require("./routes/empleados.js")

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors())
app.use(express.json());
app.use('/api', cuentaRoutes)
app.use('/api', cursosRoutes)
app.use('/api', gruposRoutes)
app.use('/api', empleadosRoutes)



// routes
app.get('/', (req, res) => {
    res.send("Welcome to my API");
})



//mongoose
mongoose      
    //.connect("mongodb://torresproject.com:27019/Capacitacion")
    .connect("mongodb+srv://root:1234@detest.hgkm2r1.mongodb.net/?retryWrites=true&w=majority/test")
    .then(()=>console.log('Conectado al servidor de  MONGO DB'))
    .catch((error) => console.log(error))

app.listen(port, () => console.log('server listening on port ', port));

