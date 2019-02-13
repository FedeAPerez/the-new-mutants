const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('../app/routes');
const app = express();

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
  });
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Prevent from favicon in API - NON EXISTANT -
app.get('/favicon.ico', (req, res) => res.status(204));

// Set de todas las rutas de express con el uso de middleware
router(app);

module.exports = app;