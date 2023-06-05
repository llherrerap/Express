const express = require('express');
const session = require('express-session');

const app = express();

// Configuración de express-session
app.use(session({
  secret: 'mi_secreto', // Clave secreta para cifrar la sesión (puede ser cualquier valor)
  resave: false, // No guardar la sesión si no ha habido cambios
  saveUninitialized: true, // Guardar sesiones no inicializadas (por ejemplo, nuevas visitas)
}));

// Middleware personalizado para proteger rutas
const requireLogin = (req, res, next) => {
  if (req.session && req.session.userId) {
    // El usuario está autenticado, continuar con la siguiente función
    next();
  } else {
    // El usuario no está autenticado, redirigir a la página de inicio de sesión
    res.redirect('/login');
  }
};

// Ruta protegida, solo accesible si el usuario está autenticado
app.get('/dashboard', requireLogin, (req, res) => {
  res.send('Bienvenido a tu panel de control');
});

// Ruta de inicio de sesión, crea una sesión para el usuario
app.post('/login', (req, res) => {
  // Validar las credenciales del usuario y autenticarlo
  // En este ejemplo, se supone que se ha autenticado con éxito
  req.session.userId = 'mi_id_de_usuario';
  res.redirect('/dashboard');
});

// Ruta de cierre de sesión, destruye la sesión del usuario
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
