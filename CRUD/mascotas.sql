USE usuarios;

CREATE TABLE mascotas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  especie VARCHAR(100) NOT NULL,
  raza VARCHAR(100),
  edad INT,
  propietario VARCHAR(100) NOT NULL
);

INSERT INTO mascotas (nombre, especie, raza, edad, propietario) VALUES
  ('Max', 'Perro', 'Labrador', 3, 'Juan'),
  ('Luna', 'Gato', 'Persa', 5, 'María'),
  ('Rocky', 'Perro', 'Bulldog', 2, 'Pedro'),
  ('Nala', 'Gato', 'Siames', 1, 'Laura'),
  ('Simba', 'Gato', 'Bengal', 4, 'Andrés'),
  ('Bella', 'Perro', 'Chihuahua', 6, 'Ana'),
  ('Lucky', 'Perro', 'Golden Retriever', 2, 'Diego'),
  ('Milo', 'Gato', 'Maine Coon', 3, 'Carolina'),
  ('Coco', 'Perro', 'Poodle', 4, 'Roberto'),
  ('Lola', 'Perro', 'Bichon Frise', 1, 'Sofía');
