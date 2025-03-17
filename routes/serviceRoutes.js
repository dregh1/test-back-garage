const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Créer un service
router.post('/', async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lire tous les services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mettre à jour un service
router.put('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id,
            req.body, { new: true });
        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Supprimer un service
router.delete('/:id', async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: "Service supprimé" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

function generateRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

module.exports = router;