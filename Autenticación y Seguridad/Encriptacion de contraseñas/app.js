const bcrypt = require('bcrypt');

// En el registro de un usuario, hashea la contraseña antes de almacenarla
// El número de rondas de sal especificado por saltRounds determina el factor de costo computacional para generar el hash. Un valor mayor de saltRounds aumenta la seguridad, pero también incrementa el tiempo necesario para generar el hash.

// Es importante encontrar un equilibrio entre seguridad y rendimiento al establecer el valor de saltRounds. Un valor comúnmente recomendado es de al menos 10 rondas, pero es posible aumentar este valor dependiendo de los requisitos de seguridad y de los recursos del sistema.
const saltRounds = 10;
const plainPassword = 'micontrasenia';
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
const loginPassword = 'micontrasenia';
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
