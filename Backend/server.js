require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const locationRoutes = require('./routes/location');

const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:8100', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas
app.use('/api/auth', authRoutes);       // Auth con JWT
app.use('/api/admin', adminRoutes);         // Admin con JWT
app.use('/api', locationRoutes);        

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
