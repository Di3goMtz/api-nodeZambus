const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const StopSchema = new mongoose.Schema({
  _id: { type: Number }, // Define el _id como un número
  nombre: { type: String, required: true },
  ubicacion: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
  },
  creadaPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

StopSchema.plugin(autoIncrement, { inc_field: '_id' });

module.exports = mongoose.model('Stop', StopSchema);
