const { dbReader, dbWriter } = require('../db/connections');
const bcrypt = require('bcrypt');

// Registro
const checkUserExists = async (username, email) => {
    return new Promise((resolve, reject) => {
        dbReader.query(
            'SELECT username, email FROM usuarios WHERE username = ? OR email = ?',
            [username, email],
            (err, results) => {
                if (err) return reject(err);
                resolve(results);
            }
        );
    });
};

const insertUser = async (userData) => {
    const { username, hashedPassword, rut, email, regionId, comunaId } = userData;
    return new Promise((resolve, reject) => {
        dbWriter.query(
            `INSERT INTO usuarios 
            (username, password, role, activo, rut, email, region_id, comuna_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [username, hashedPassword, 'user', 1, rut, email, regionId, comunaId],
            (err) => {
                if (err) return reject(err);
                resolve();
            }
        );
    });
};

const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
};

// Login
const findUserByUsername = async (username) => {
    return new Promise((resolve, reject) => {
        dbReader.query(
            'SELECT id, username, password, role, activo FROM usuarios WHERE username = ?',
            [username],
            (err, results) => {
                if (err) return reject(err);
                resolve(results[0] || null);
            }
        );
    });
};

const comparePassword = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = {
    checkUserExists,
    insertUser,
    hashPassword,
    findUserByUsername,
    comparePassword
};
