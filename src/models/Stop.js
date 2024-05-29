const mongoose = require('mongoose');

const StopSchema = new mongoose.Schema({
  nombre: String,
  ubicacion: { latitud: Number, longitud: Number },
  rutas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Route' }]
});

module.exports = mongoose.model('Stop', StopSchema);