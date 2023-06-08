const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware externo
app.use(helmet());

// Configuración de Morgan
// Este modo registra información detallada sobre cada solicitud entrante, incluyendo la dirección IP del cliente, el código de estado y el tiempo de respuesta. 
app.use(morgan('dev'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});