const mutantsController = require("../controllers/mutants-controller");

module.exports = function(app) {
    app.get('/', mutantsController.getHome);
};