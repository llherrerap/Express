// Importar Express y otros módulos necesarios
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Configurar middleware
app.use(cookieParser());

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
  // Verificar las credenciales del usuario
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    // Credenciales válidas, iniciar sesión y establecer cookie
    res.cookie('session', '1234567890', { maxAge: 900000, httpOnly: true });
    res.send('Inicio de sesión exitoso');
  } else {
    // Credenciales inválidas, mostrar mensaje de error
    res.send('Credenciales incorrectas');
  }
});

// Ruta protegida que requiere inicio de sesión
app.get('/dashboard', (req, res) => {
  // Verificar si el usuario tiene una sesión válida
  if (req.cookies.session === '1234567890') {
    res.send('Bienvenido al panel de control');
  } else {
    res.send('Debes iniciar sesión para acceder al panel de control');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
