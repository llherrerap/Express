const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Configurar Handlebars como el motor de plantillas por defecto
app.engine('handlebars');
app.set('view engine', 'handlebars');

// Configurar una ruta para renderizar la plantilla
app.get('/', (req, res) => {
    // Datos para rellenar la plantilla
    const data = {
        title: 'Mi página',
        message: '¡Hola, Handlebars!'
    };

    // Renderizar la plantilla y enviarla al cliente
    res.render('template', data);
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto http://localhost:3000');
});
