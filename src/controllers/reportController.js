const Report = require('../models/report');

exports.createReport = async (req, res) => {
  const { reason } = req.body;
  console.log('Datos recibidos para crear el reporte:', { reason, userId: req.user._id });
  try {
    const report = new Report({
      userId: req.user._id,
      reason,
    });
    await report.save();

    res.status(201).json({ message: 'Report created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};