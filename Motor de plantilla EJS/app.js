const express = require('express');
const app = express();

// Establecer EJS como motor de plantillas
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
      titulo: '¡Hola, mundo!',
      cuerpo: 'Esta es mi primera plantilla!! :)'
    };
  
    // Renderizar la vista 'index.ejs' y pasarle los datos
    res.render('index', { data });
  });

  const port = 3000;

  app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });
  