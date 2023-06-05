const express = require('express');
const app = express();

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!');
});

// Ruta para la página "Acerca de"
app.get('/about', (req, res) => {
  res.send('Esta es la página "Acerca de".');
});

// Ruta para manejar otras rutas no definidas
app.get('*', (req, res) => {
  res.send('Página no encontrada');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
