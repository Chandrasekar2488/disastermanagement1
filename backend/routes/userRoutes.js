// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getEmergencies, addEmergency } = require('../controllers/userController');

// Route to get all emergencies
router.get('/', getEmergencies);

// Route to add a new emergency
router.post('/', addEmergency);

module.exports = router;
