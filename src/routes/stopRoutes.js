const express = require('express');
const stopService = require('../services/stopService');

const router = express.Router();

router.get('/stops', async (req, res) => {
  const stops = await stopService.getAllStops();
  res.json(stops);
});

router.get('/stops/:id', async (req, res) => {
  const stop = await stopService.getStopById(req.params.id);
  res.json(stop);
});

router.post('/stops', async (req, res) => {
  const newStop = await stopService.createStop(req.body);
  res.json(newStop);
});

router.put('/stops/:id', async (req, res) => {
  const updatedStop = await stopService.updateStop(req.params.id, req.body);
  res.json(updatedStop);
});

router.delete('/stops/:id', async (req, res) => {
  await stopService.deleteStop(req.params.id);
  res.json({ message: 'Parada eliminada' });
});

module.exports = router;