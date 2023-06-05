const express = require('express');
const app = express();

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para la página Acerca de
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

// Ruta para la página de contacto
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
