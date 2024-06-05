const express = require('express');
const router = express.Router();
const busService = require('../services/busService');

router.get('/', busService.getAllBuses);
router.get('/:id', busService.getBusById);
router.post('/', busService.createBus);
router.put('/:id', busService.updateBus);
router.delete('/:id', busService.deleteBus);

module.exports = router;
