const Device = require('../models/device');

// Get all devices
exports.getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new device
exports.addDevice = async (req, res) => {
    const { name, type, status } = req.body;

    try {
        const newDevice = new Device({
            name,
            type,
            status
        });

        const device = await newDevice.save();
        res.status(201).json(device);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a device status
exports.updateDeviceStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const device = await Device.findById(id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        device.status = status;
        await device.save();

        res.json(device);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};