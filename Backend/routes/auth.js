const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { checkUserExists, insertUser, hashPassword, findUserByUsername, comparePassword } = require('../services/user.service');
const { jwtSecret, jwtExpire } = require('../config');

// Registro
router.post('/register', async (req, res) => {
    const { username, password, rut, email, regionId, comunaId } = req.body;

    if (!username || !password || !rut || !email || !regionId || !comunaId) {
        return res.status(400).json({ success: false, message: 'Faltan datos obligatorios' });
    }

    try {
        const existingUsers = await checkUserExists(username, email);

        if (existingUsers.length > 0) {
            const existsUsername = existingUsers.some(u => u.username === username);
            const existsEmail = existingUsers.some(u => u.email === email);
            let mensaje = 'Ya existe ';
            if (existsUsername && existsEmail) mensaje += 'el usuario y el email';
            else if (existsUsername) mensaje += 'el usuario';
            else if (existsEmail) mensaje += 'el email';
            return res.json({ success: false, message: mensaje });
        }

        const hashedPassword = await hashPassword(password);
        await insertUser({ username, hashedPassword, rut, email, regionId, comunaId });

        res.json({ success: true, message: 'Usuario registrado' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error interno' });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ success: false, message: 'Faltan datos' });

    try {
        const user = await findUserByUsername(username);
        if (!user) return res.json({ success: false, message: 'Usuario no existe' });

        const match = await comparePassword(password, user.password);
        if (!match) return res.json({ success: false, message: 'Contraseña incorrecta' });

        // Crear token JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role || 'user' },
            jwtSecret,
            { expiresIn: jwtExpire }
        );

        const activo = user.activo === 1;

        res.json({ success: true, message: 'Login exitoso', token, role: user.role || 'user', activo });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error interno' });
    }
});

// Verificar sesión mediante JWT
router.get('/session', (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.json({ success: false });

    const token = authHeader.split(' ')[1];
    if (!token) return res.json({ success: false });

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.json({ success: false });
        res.json({ success: true, user: decoded, activo: true });
    });
});

module.exports = router;