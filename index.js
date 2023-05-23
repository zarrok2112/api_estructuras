const express = require('express');
require('dotenv').config();
const {dbConnection} = require("./database/config.js")

// crear express app
const app = express();
const port = process.env.PORT || 3000;

//base de datos
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Escuchar en el puerto especificado
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto:', process.env.PORT);
});
