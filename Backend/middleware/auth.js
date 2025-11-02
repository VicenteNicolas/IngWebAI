const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ success: false, message: 'Token requerido' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Token inválido' });

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.status(403).json({ success: false, message: 'Token expirado o inválido' });
        req.user = decoded;
        next();
    });
}

function authMiddleware(req, res, next) {
    verifyToken(req, res, next);
}

function adminMiddleware(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.role === 'admin') next();
        else res.status(403).json({ success: false, message: 'Acceso denegado' });
    });
}

module.exports = { authMiddleware, adminMiddleware };
