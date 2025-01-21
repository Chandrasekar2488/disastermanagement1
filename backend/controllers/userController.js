// server/controllers/userController.js
const Emergency = require('../models/user');

// Function to fetch emergencies
const getEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find();
    res.json(emergencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Function to add a new emergency
const addEmergency = async (req, res) => {
  const { emergencyNumbers, location, emergencyType } = req.body;

  try {
    const newEmergency = new Emergency({ emergencyNumbers, location, emergencyType });
    await newEmergency.save();
    res.json(newEmergency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getEmergencies,
  addEmergency,
};
