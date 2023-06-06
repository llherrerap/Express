const bcrypt = require('bcrypt');

// En el registro de un usuario, hashea la contraseña antes de almacenarla
const saltRounds = 10;
const plainPassword = 'micontraseña';
bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al hashear la contraseña:', err);
    return;
  }
  // Almacena el hash en la base de datos
  console.log('Contraseña hasheada:', hash);
});

// En el inicio de sesión, verifica la contraseña hasheada
const hashedPassword = '$2b$10$ljixBu0ityAKfJdSXArEauZ/LLyXR3t6d73MFbhThQK5B37QQJx3y';
const loginPassword = 'micontraseña';
bcrypt.compare(loginPassword, hashedPassword, (err, result) => {
  if (err) {
    console.error('Error al comparar contraseñas:', err);
    return;
  }
  if (result) {
    console.log('Contraseña válida. Iniciar sesión exitoso.');
  } else {
    console.log('Contraseña inválida. Iniciar sesión fallido.');
  }
});
