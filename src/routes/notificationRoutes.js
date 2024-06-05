const express = require('express');
const router = express.Router();
const notificationService = require('../services/notificationService');

router.get('/', notificationService.getAllNotifications);
router.get('/:id', notificationService.getNotificationById);
router.post('/', notificationService.createNotification);
router.put('/:id', notificationService.updateNotification);
router.delete('/:id', notificationService.deleteNotification);

module.exports = router;