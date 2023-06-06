const express = require('express');
const app = express();

// Configura la carpeta "public" como la carpeta raíz para los archivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/noticias', (req, res) => {
    res.sendFile(__dirname + '/public/noticias.html');
});

app.get('/galeria', (req, res) => {
    res.sendFile(__dirname + '/public/galeria.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor Express en funcionamiento en el puerto 3000');
});
