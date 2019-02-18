// routes/index.js
const mutantsRoutes = require('./mutants-routes');
const homeRoutes = require('./home-routes');
const statsRoutes = require('./stats-routes');

module.exports = function(app) {
    mutantsRoutes(app);
    homeRoutes(app);
    statsRoutes(app);
};