const express = require('express');
const routeService = require('../services/routeService');

const router = express.Router();

router.get('/routes', async (req, res) => {
  const routes = await routeService.getAllRoutes();
  res.json(routes);
});

router.get('/routes/:id', async (req, res) => {
  const route = await routeService.getRouteById(req.params.id);
  res.json(route);
});

router.post('/routes', async (req, res) => {
  const newRoute = await routeService.createRoute(req.body);
  res.json(newRoute);
});

router.put('/routes/:id', async (req, res) => {
  const updatedRoute = await routeService.updateRoute(req.params.id, req.body);
  res.json(updatedRoute);
});

router.delete('/routes/:id', async (req, res) => {
  await routeService.deleteRoute(req.params.id);
  res.json({ message: 'Ruta eliminada' });
});

module.exports = router;