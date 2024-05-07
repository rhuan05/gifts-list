const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.renderHome);
router.post('/reserve', homeController.reserve);

module.exports = router;