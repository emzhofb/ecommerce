const express = require('express');
const router = express.Router();

const apiController = require('../controllers/ecommerce');

/* GET users listing. */
router.get('/', apiController.getPhonebook);
router.post('/', apiController.postEcommerce);

module.exports = router;
