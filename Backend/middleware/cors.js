const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
