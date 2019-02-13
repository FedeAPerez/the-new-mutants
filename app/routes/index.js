// routes/index.js
const mutantsRoutes = require('./mutants-routes');

module.exports = function(app) {
    mutantsRoutes(app);
};