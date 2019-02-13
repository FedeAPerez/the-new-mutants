// routes/index.js
const mutantsRoutes = require('./mutantsRoutes');

module.exports = function(app) {
    mutantsRoutes(app);
};