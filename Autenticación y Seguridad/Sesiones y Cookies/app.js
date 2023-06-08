const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(session({
<<<<<<< HEAD
  // Secret especifica una cadena de texto secreta que se utiliza para firmar la cookie de la sesión. Esta cadena de texto se utiliza para proteger la integridad de la sesión y debe ser única y segura. 
  // En el ejemplo, se utiliza el valor "secreto", pero en una aplicación real deberías utilizar una cadena secreta más compleja y segura.
=======
>>>>>>> c18f85a75c114dbe41cb130853b6cce885c069b7
  secret: 'secreto'
}));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/formulario', (req, res)=>{
    // Guarda el valor que entra en el formulario en la sesion para mantenerlo abierto
    req.session.user = req.body.name;
    res.send('Inicio de sesión exitoso');
})

app.get('/perfil', (req, res) => {
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

