const mysql = require('mysql2');
require('dotenv').config();

const createDbPool = (user, password) => {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: user,
        password: password,
        database: process.env.DB_NAME,
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        charset: 'utf8mb4'
    });

    // Evitar que el backend se caiga si se pierde conexión
    pool.on('error', (err) => {
        console.error('Error en el pool de base de datos:', err);
    });

    return pool;
};

const dbReader = createDbPool(process.env.DB_USER, process.env.DB_PASSWORD);
const dbWriter = createDbPool(process.env.DB_WRITER_USER, process.env.DB_WRITER_PASSWORD);
const dbAdmin = createDbPool(process.env.DB_ADMIN_USER, process.env.DB_ADMIN_PASSWORD);

module.exports = { dbReader, dbWriter, dbAdmin };