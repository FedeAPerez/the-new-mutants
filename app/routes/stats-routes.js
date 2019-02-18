const statsController = require("../controllers/stats-controller");

module.exports = function(app) {
    app.get('/stats', statsController.getStats);
};