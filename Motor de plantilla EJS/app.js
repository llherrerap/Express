const express = require('express');
const app = express();

// Establecer EJS como motor de plantillas
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const datos = {
      titulo: '¡Hola, mundo!',
      cuerpo: 'Esta es mi primera plantilla!! :)'
    };
  
    // Renderizar la vista 'index.ejs' y pasarle los datos
    // `render()` es un método en los frameworks de desarrollo web como Express.js que permite combinar una plantilla con datos dinámicos para generar una respuesta HTML completa. Toma una plantilla predefinida, reemplaza las variables dentro de la plantilla con datos específicos y genera el resultado final que se enviará al cliente. Esto permite crear páginas web dinámicas con contenido personalizado basado en la lógica de la aplicación.
    res.render('index', { datos });
  });

  const port = 3000;

  app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });
  