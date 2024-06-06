const Stop = require('../models/Stop');

exports.createStop = async (req, res) => {
  const { name, latitude, longitude } = req.body;
  try {
    const stop = new Stop({ name, latitude, longitude, createdBy: req.user._id });
    await stop.save();
    res.status(201).json(stop);
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
  const { name, latitude, longitude } = req.body;
  
  const userId = req.user._id;

  try {
    const stop = await Stop.findById(id);
    if (stop) {
      stop.name = name || stop.name;
      stop.latitude = latitude || stop.latitude;
      stop.longitude = longitude || stop.longitude;

      stop.modificadoPor = {
        userId,
        motivo: 'Modificación de la parada',
      };

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
  const { reason } = req.body;
  try {
    const stop = await Stop.findById(id);
    if (stop) {
      stop.reasonForDeletion = reason;
      await stop.remove();
      res.json({ message: 'Stop removed' });
    } else {
      res.status(404).json({ error: 'Stop not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};