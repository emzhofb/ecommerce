const express = require('express');
const router = express.Router();

const apiController = require('../../controllers/ecommerce');

/* GET users listing. */
router.get('/', apiController.getEcommerce);
router.post('/', apiController.postEcommerce);

module.exports = router;
