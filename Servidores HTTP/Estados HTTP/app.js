const express = require("express");
const app = express();

// Ruta de ejemplo que devuelve una respuesta exitosa
app.get("/", (req, res) => {
  res.status(200).send("Respuesta exitosa");
});

// Ruta de ejemplo que devuelve un error 404
app.get("/notfound", (req, res) => {
  res.status(404).send("Página no encontrada");
});

// Ruta de ejemplo que devuelve un error 500
app.get("/error", (req, res) => {
  res.status(500).send("Error interno del servidor");
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
