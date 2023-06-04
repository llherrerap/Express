const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});