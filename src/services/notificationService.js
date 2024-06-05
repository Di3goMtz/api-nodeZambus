const Notification = require('../models/Notification');

exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    res.json(notification);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createNotification = async (req, res) => {
  const newNotification = new Notification(req.body);
  try {
    const notification = await newNotification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(notification);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};