const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

// Ruta para procesar los datos del formulario
app.post('/formulario', (req, res) => {
  const nombre = req.body.name;
  const email = req.body.email;

  // Hacer algo con los datos recibidos, como guardarlos en una base de datos

  res.send(`¡Hola, ${nombre}! Tus datos han sido recibidos correctamente.`);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
