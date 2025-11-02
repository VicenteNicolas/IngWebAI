const express = require('express');
const router = express.Router();
const path = require('path');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { noCache } = require('../middleware/cache');
const { dbReader } = require('../db/connections'); 


// Endpoint para obtener regiones
router.get('/regiones', (req, res) => {
    dbReader.query('SELECT * FROM regiones ORDER BY id ASC', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al obtener regiones' });
        }
        res.json(results);
    });
});

// Endpoint para obtener comunas por region_id
router.get('/comunas/:regionId', (req, res) => {
    const { regionId } = req.params;
    dbReader.query('SELECT * FROM comunas WHERE region_id = ? ORDER BY nombre ASC', [regionId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al obtener comunas' });
        }
        res.json(results);
    });
});

module.exports = router;
