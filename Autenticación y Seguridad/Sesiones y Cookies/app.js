const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/formulario', (req, res)=>{
    req.session.user = req.body.name;
    res.send('Inicio de sesión exitoso');
})

app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send('Perfil del usuario: ' + req.session.user);
  } else {
    res.send('No se ha iniciado sesión');
  }
});

let port=3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

