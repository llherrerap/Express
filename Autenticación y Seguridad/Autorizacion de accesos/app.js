// Importar Express y otros módulos necesarios
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Configurar middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
  // Verificar las credenciales del usuario
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'desarrollador' && password === 'backend1234') {
    // Credenciales válidas, iniciar sesión y establecer cookie y guarda la sesion con el valor de exitoso
    res.cookie('session', 'exitoso');
    res.send('Inicio de sesión exitoso');
  } else {
    // Credenciales inválidas, mostrar mensaje de error
    res.send('Credenciales incorrectas');
  }
});

// Ruta protegida que requiere inicio de sesión
app.get('/administracion', (req, res) => {
  // Verificar si el usuario tiene una sesión válida
  console.log(req.cookies.session)
  if (req.cookies.session === 'exitoso') {
    res.send('Bienvenido al panel de control de administracion');
  } else {
    res.send('Debes iniciar sesión para acceder al panel de control');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
