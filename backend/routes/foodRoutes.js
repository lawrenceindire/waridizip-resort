const express = require('express');
const Food = require('../models/Food');

const router = express.Router();

router.get('/', async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

router.post('/', async (req, res) => {
  const food = await Food.create(req.body);
  res.json(food);
});

module.exports = router;