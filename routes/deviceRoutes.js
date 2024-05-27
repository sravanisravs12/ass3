const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.get('/', deviceController.getAllDevices);
router.post('/', deviceController.addDevice);
router.put('/:id', deviceController.updateDeviceStatus);

module.exports = router;