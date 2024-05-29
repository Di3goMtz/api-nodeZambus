const express = require('express');
const busService = require('../services/busService');

const router = express.Router();

router.get('/buses/:id', async (req, res) => {
  const bus = await busService.getBusById(req.params.id);
  res.json(bus);
});

router.post('/buses', async (req, res) => {
  const newBus = await busService.createBus(req.body);
  res.json(newBus);
});

router.put('/buses/:id', async (req, res) => {
  const updatedBus = await busService.updateBus(req.params.id, req.body);
  res.json(updatedBus);
});

router.delete('/buses/:id', async (req, res) => {
  await busService.deleteBus(req.params.id);
  res.json({ message: 'Autobús eliminado' });
});

module.exports = router;