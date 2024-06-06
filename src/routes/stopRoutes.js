const express = require('express');
const { createStop, getStops, updateStop, deleteStop, getStopById } = require('../controllers/stopController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getStops);
router.get('/:id', getStopById);
router.route('/').post(protect, createStop).get(getStops);
router.route('/update/:id').put(protect, updateStop).delete(protect, deleteStop);

module.exports = router;