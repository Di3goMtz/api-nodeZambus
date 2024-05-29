const Bus = require('../models/Bus');

exports.getBusById = async function(id) {
  return await Bus.findById(id).populate('ruta');
};

exports.createBus = async function(busData) {
  const newBus = new Bus(busData);
  return await newBus.save();
};

exports.updateBus = async function(id, busData) {
  return await Bus.findByIdAndUpdate(id, busData, { new: true });
};

exports.deleteBus = async function(id) {
  return await Bus.findByIdAndRemove(id);
};