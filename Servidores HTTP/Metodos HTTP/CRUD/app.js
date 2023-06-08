const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tareas'
});

// Conexión a la base de datos
connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Configuración del middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para mostrar todas las tareas
app.get('/', (req, res) => {
  connection.query('SELECT * FROM tareas', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.get('/tareas', (req, res) => {
    res.sendFile(__dirname + '/tareas.html')
});

// Ruta para crear una nueva tarea
app.post('/agregar', (req, res) => {
    const tarea = req.body.name;
  console.log(tarea)
  connection.query(`INSERT INTO tareas (id, nombre) VALUES (NULL,'${tarea}')`, (err, result) => {
    if (err) throw err;
    res.send('Tarea creada exitosamente');
  });
});

// Ruta para actualizar una tarea
app.post('/actualizar', (req, res) => {
  const id = req.body.id;
  const tarea = req.body.name;
  console.log(id, tarea)
  connection.query(`UPDATE tareas SET nombre = '${tarea}' WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    res.send('Tarea actualizada exitosamente');
  });
});

// Ruta para eliminar una tarea
app.post('/borrar', (req, res) => {
  const id = req.body.id;
  connection.query(`DELETE FROM tareas WHERE id = '${id}'`, (err, result) => {
    if (err) throw err;
    res.send('Tarea eliminada exitosamente');
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
