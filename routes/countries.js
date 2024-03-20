const express = require('express');
const Country = require('../models/Country');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const countries = await Country.find().sort({ name: 1 });
    const sortedCountries = countries.map(country => ({
      ...country.toObject(),
      states: country.states.sort((a, b) => a.localeCompare(b))
    }));
    res.json(sortedCountries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
