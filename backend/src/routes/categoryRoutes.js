const express = require('express');
const router = express.Router();

// Controllers (to be implemented)
// const categoryController = require('../controllers/categoryController');

// Example route placeholders
router.get('/', (req, res) => {
  // return list of categories
  res.status(200).json({ message: 'List categories - not implemented' });
});

router.post('/', (req, res) => {
  // create a new category
  res.status(201).json({ message: 'Create category - not implemented' });
});

module.exports = router;
