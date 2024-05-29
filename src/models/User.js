const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: Number,
  nombre: String,
  apellido: String,
  tipoUsuario: String,
  email: String,
  password: String
},
{ versionKey: false });

module.exports = mongoose.model('User', UserSchema);