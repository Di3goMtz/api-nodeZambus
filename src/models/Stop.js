const mongoose = require('mongoose');

const StopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reasonForDeletion: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model('Stop', StopSchema);