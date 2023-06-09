const express = require('express');
const mysql = require('mysql');
const config = require("./config.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

// Conexión a la base de datos
connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para mostrar todas las tareas
app.get('/', (req, res) => {
  connection.query('SELECT * FROM personas', (error, filas) => {
    if (error) {
      console.log("Error en la consulta", error)
      res.status(500).send("Error en la consulta");
    }else{
      res.render('usuarios', { filas: filas });
    }
  });
});

app.get('/agregarUsuario', (req, res) => {
  res.sendFile(__dirname + "/public/agregar.html")
});

// Ruta para crear una nueva tarea
app.post('/agregar', (req, res) => {
  const cedula = req.body.id;
  const nombre = req.body.name;
  const apellido = req.body.lastname;
  const edad = req.body.age;
  const fecha_nacimiento = req.body.birth;
  console.log(cedula, nombre, apellido, edad, fecha_nacimiento)
  connection.query(`INSERT INTO personas (cedula, nombre, apellido, edad, fecha_nacimiento) VALUES (${cedula},'${nombre}', '${apellido}', ${edad}, '${fecha_nacimiento}')`, (error, result) => {
    if (error) {
      console.log("Ocurrio un error en la ejecución", error)
      res.status(500).send("Error en la consulta");
    }else{
      res.redirect('/');
    }
  });
});

app.get('/buscarUsuario', (req, res) => {
  res.sendFile(__dirname + "/public/buscar.html")
});

// Ruta para buscar una tarea
app.post('/buscarActualizar', (req, res) => {
  const cedula = req.body.id;
  console.log(cedula)
  connection.query(`SELECT * FROM personas WHERE cedula=${cedula}`, (error, registro) => {
    if (error) {
      console.log("Error en la consulta", error)
      res.status(500).send("Error en la consulta");
    }else{
      console.log(registro)
      res.render('actualizar', { registros: registro });
    }
  });
});

// Ruta para actualizar una tarea
app.post('/actualizar', (req, res) => {
  const cedula = req.body.id;
  const nombre = req.body.name;
  const apellido = req.body.lastname;
  const edad = req.body.age;
  connection.query(`UPDATE personas SET nombre = '${nombre}', apellido='${apellido}', edad=${edad} WHERE cedula = ${cedula}`, (error, resultado) => {
    if (error) {
      console.log("Ocurrio un error en la ejecución", error)
      res.status(500).send("Error en la consulta");
    }else{
      res.redirect('/');
    }
    
  });
});

// Ruta para eliminar una tarea
app.post('/eliminar', (req, res) => {
  const cedula = req.body.id;
  connection.query(`DELETE FROM personas WHERE cedula = '${cedula}'`, (error, result) => {
    if (error) {
      console.log("Ocurrio un error en la ejecución", error)
      res.status(500).send("Error en la consulta");
    }else{
      res.redirect('/');
    }
  });
});

// Iniciar el servidor
app.listen(config.puerto, config.ip, () => {
  console.log(
    `El servidor está corriendo en http://${config.ip}:${config.puerto}`
  );
});