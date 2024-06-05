const express = require('express');
const router = express.Router();
const routeService = require('../services/routeService');

router.get('/', routeService.getAllRoutes);
router.get('/:id', routeService.getRouteById);
router.post('/', routeService.createRoute);
router.put('/:id', routeService.updateRoute);
router.delete('/:id', routeService.deleteRoute);

module.exports = router;
