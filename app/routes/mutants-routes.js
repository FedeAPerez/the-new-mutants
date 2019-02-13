const mutantsController = require("../controllers/mutants-controller");

module.exports = function(app) {
    app.post('/mutant', mutantsController.isMutant);
};