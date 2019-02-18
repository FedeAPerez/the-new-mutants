const Stat = require('../models/stat');

module.exports = {
    getStats: async function(req, res, next) {
        var stat = new Stat();
        await stat.getStats(); // búsqueda en bd, mock, etc.
        stat.getAverage();
        res.status(200).send(stat.getJson());
        next();
    }
};