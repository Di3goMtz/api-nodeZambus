const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const routeRoutes = require('./src/routes/routeRoutes');
const stopRoutes = require('./src/routes/stopRoutes');
const busRoutes = require('./src/routes/busRoutes');

mongoose.connect('mongodb://localhost/zambusApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRoutes);
app.use(routeRoutes);
app.use(stopRoutes);
app.use(busRoutes);

app.listen(port, () => console.log('Servidor corriendo en http://localhost:3000'));