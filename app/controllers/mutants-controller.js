const Mutant = require('../models/mutant');

module.exports = {
    isMutant: async function(req, res, next) {
        var mut = new Mutant();
        mut.isMutant(req.body.dna);
        res.status(mut.status).send();
        next();
    }
};