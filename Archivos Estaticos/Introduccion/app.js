const express = require('express');
const app = express();

// Middleware para habilitar el caché de archivos estáticos
app.use(express.static('public')); // Los archivos se almacenarán en caché durante 1 hora (3600000 milisegundos)

// Ruta principal
app.get('/img1', (req, res) => {
  res.sendFile(__dirname + "/public/img.jpg")
});

// Ruta principal
app.get('/img2', (req, res) => {
  res.sendFile(__dirname + "/img.jpg")
});

// Iniciar el servidor
app.listen(3500, () => {
  console.log('Servidor iniciado en el puerto http://localhost:3500');
});
