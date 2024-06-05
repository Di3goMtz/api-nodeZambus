const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  puntos: [{
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true }
  }]
});

module.exports = mongoose.model('Route', RouteSchema);
