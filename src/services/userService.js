const User = require('../models/User');

async function getNextId(User) {
  const highestId = await User.find().sort({id: -1}).limit(1).exec();
  let nextId = 1;
  if(highestId.length > 0) {
      nextId = highestId[0].id + 1;
  }
  return nextId;
};

async function insertWithIntegerId(document) {
  document.id = await getNextId(User);
  return await document.save();
};

exports.getAllUsers = async function() {
  return await User.find({});
};

exports.getUserById = async function(id) {
  return await User.findById(id);
};

exports.addUser = async function(userData) {
  const newUser = new User({
    nombre: userData.nombre,
    apellido: userData.apellido,
    tipoUsuario: userData.tipoUsuario,
    email: userData.email,
    password: userData.password
  });

  try {
    newUser._id = await getNextId(User); 
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw err;
  }
};


exports.updateUser = async function(id, userData) {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.deleteUser = async function(id) {
  return await User.findByIdAndRemove(id);
};