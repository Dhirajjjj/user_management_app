const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const corsMiddleware = require('./middleware/cors');

const app = express();

app.use(bodyParser.json());

app.use(corsMiddleware);

app.use('/api/users', userRoutes);

module.exports = app;
