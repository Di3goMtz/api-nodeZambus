const Stop = require('../models/Stop');
const jwt = require('jsonwebtoken');

exports.createStop = async (req, res) => {
  const { nombre, latitud, longitud } = req.body;
  try {
    const stop = new Stop({
      nombre,
      ubicacion: {
        latitud,
        longitud
      },
      creadaPor: req.user._id
    });
    await stop.save();
    res.status(201).json({ stop});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStops = async (req, res) => {
  try {
    const busStops = await Stop.find({});
    res.json(busStops);
  } catch (error) {
    console.error('Server error fetching bus stops:', error);
    res.status(500).json({ error: 'Error fetching bus stops' });
  }
};

exports.getStopById = async (req, res) => {
  const { id } = req.params;
  try {
    const stop = await Stop.findById(id);
    if (stop) {
      res.json(stop);
    } else {
      res.status(404).json({ error: 'Stop not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStop = async (req, res) => {
  const { id } = req.params;
  const { nombre, latitud, longitud } = req.body;
  
  try {
    const stop = await Stop.findById(id);
    if (stop) {
      stop.nombre = nombre || stop.nombre;
      stop.ubicacion.latitud = latitud || stop.ubicacion.latitud;
      stop.ubicacion.longitud = longitud || stop.ubicacion.longitud;

      await stop.save();
      res.json(stop);
    } else {
      res.status(404).json({ error: 'Stop not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStop = async (req, res) => {
  const { id } = req.params;
  try {
    const stop = await Stop.findByIdAndDelete(id);
    if (stop) {
      res.json({ message: 'Stop removed' });
    } else {
      res.status(404).json({ error: 'Stop not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};