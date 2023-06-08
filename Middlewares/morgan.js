const express = require('express');
const morgan = require('morgan');

const app = express();

// Configuración de Morgan
// Al utilizar app.use(morgan('dev')), estás configurando Morgan en modo de desarrollo ('dev'), que proporciona un formato de registro colorido y conciso para las solicitudes. Esto es útil durante el desarrollo para obtener una vista rápida de las solicitudes entrantes y las respuestas del servidor.
app.use(morgan('common'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
