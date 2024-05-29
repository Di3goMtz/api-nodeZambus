const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  nombre: String,
  puntos: [{ latitud: Number, longitud: Number }],
  busNumber: String,
  stops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stop' }]
});

module.exports = mongoose.model('Route', RouteSchema);