const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ID del usuario que eliminó la parada
  reason: { type: String, required: true }, // Motivo de la eliminación de la parada
}, {
  timestamps: true // Agrega campos de createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Report', ReportSchema);