const Route = require('../models/Route');

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    res.json(route);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createRoute = async (req, res) => {
  const newRoute = new Route(req.body);
  try {
    const route = await newRoute.save();
    res.status(201).json(route);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(route);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    await Route.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
