const express = require('express');
const methodOverride = require('method-override');

const app = express();

// Configuración del middleware method-override
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Array de ejemplo para simular una base de datos
let productos = [
  { id: 1, nombre: 'Producto 1' },
  { id: 2, nombre: 'Producto 2' },
  { id: 3, nombre: 'Producto 3' }
];

// Ruta para mostrar todos los productos
app.get('/productos', (req, res) => {
  res.send(productos);
});

// Ruta para mostrar el formulario de creación de producto
app.get('/productos/nuevo', (req, res) => {
  res.send(`
    <form action="/productos" method="POST">
      <input type="text" name="nombre" placeholder="Nombre del producto" required>
      <button type="submit">Crear producto</button>
    </form>
  `);
});

// Ruta para crear un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre } = req.body;
  const id = productos.length + 1;
  const nuevoProducto = { id, nombre };
  productos.push(nuevoProducto);
  res.redirect('/productos');
});

// Ruta para mostrar el formulario de actualización de producto
app.get('/productos/:id/editar', (req, res) => {
  const { id } = req.params;
  const producto = productos.find(p => p.id === parseInt(id));
  if (!producto) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  res.send(`
    <form action="/productos/${id}" method="POST">
      <input type="hidden" name="_method" value="PUT">
      <input type="text" name="nombre" value="${producto.nombre}" required>
      <button type="submit">Actualizar producto</button>
    </form>
  `);
});

// Ruta para actualizar un producto
app.post('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  const producto = productos.find(p => p.id === parseInt(id));
  if (!producto) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  producto.nombre = nombre;
  res.redirect('/productos');
});

// Ruta para eliminar un producto
app.get('/productos/:id/borrar', (req, res) => {
  const { id } = req.params;
  const productoIndex = productos.findIndex(p => p.id === parseInt(id));
  if (productoIndex === -1) {
    res.status(404).send('Producto no encontrado');
    return;
  }
  productos.splice(productoIndex, 1);
  res.redirect('/productos');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
