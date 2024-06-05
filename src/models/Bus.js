const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  numero: { type: Number, required: true },
  rutaId: { type: Number, required: true },
  ubicacionActual: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true }
  },
  ubicacionesHistoricas: [{
    latitud: { type: Number },
    longitud: { type: Number },
    timestamp: { type: Date, default: Date.now }
  }],
  horario: [{
    paradaId: { type: Number, required: true },
    horaLlegada: { type: Date, required: true }
  }]
});

module.exports = mongoose.model('Bus', BusSchema);
