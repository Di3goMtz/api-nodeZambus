const Stop = require('../models/Stop');

exports.getAllStops = async function() {
  return await Stop.find({});
};

exports.getStopById = async function(id) {
  return await Stop.findById(id);
};

exports.createStop = async function(stopData) {
  const newStop = new Stop(stopData);
  return await newStop.save();
};

exports.updateStop = async function(id, stopData) {
  return await Stop.findByIdAndUpdate(id, stopData, { new: true });
};

exports.deleteStop = async function(id) {
  return await Stop.findByIdAndRemove(id);
};