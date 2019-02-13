const mutantsController = require("../controllers/mutantsController");

module.exports = function(app) {
    app.get('/', mutantsController.getHome);
};