const Route = require('../models/Route');

exports.getAllRoutes = async function() {
  return await Route.find({}).populate('stops');
};

exports.getRouteById = async function(id) {
  return await Route.findById(id).populate('stops');
};

exports.createRoute = async function(routeData) {
  const newRoute = new Route(routeData);
  return await newRoute.save();
};

exports.updateRoute = async function(id, routeData) {
  return await Route.findByIdAndUpdate(id, routeData, { new: true });
};

exports.deleteRoute = async function(id) {
  return await Route.findByIdAndRemove(id);
};