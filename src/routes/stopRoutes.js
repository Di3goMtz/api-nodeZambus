const express = require('express');
const { createStop, getStops, updateStop, deleteStop } = require('../controllers/stopController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createStop).get(getStops);
router.route('/:id').put(protect, updateStop).delete(protect, deleteStop);

module.exports = router;