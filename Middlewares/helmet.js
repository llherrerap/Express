const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware externo
app.use(helmet());

// Configuración de Morgan
app.use(morgan('dev'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});