const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  numero: String,
  ruta: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  ubicacionActual: { latitud: Number, longitud: Number },
  horario: [{ parada: mongoose.Schema.Types.ObjectId, horaLlegada: Date }]
});

module.exports = mongoose.model('Bus', BusSchema);