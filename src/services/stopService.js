const Stop = require('../models/Stop');

exports.getAllStops = async (req, res) => {
  try {
    const stops = await Stop.find();
    res.json(stops);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getStopById = async (req, res) => {
  try {
    const stop = await Stop.findById(req.params.id);
    res.json(stop);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createStop = async (req, res) => {
  const newStop = new Stop(req.body);
  try {
    const stop = await newStop.save();
    res.status(201).json(stop);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateStop = async (req, res) => {
  try {
    const stop = await Stop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(stop);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteStop = async (req, res) => {
  try {
    await Stop.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};