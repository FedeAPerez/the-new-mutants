const Mutant = require('../models/mutant');

module.exports = {
    isMutant: async function(req, res, next) {
        if(!req.body.dna) {
            res.status(403).send();
        } else {
            var mut = new Mutant(req.body.dna);
            mut.isMutant();
            await mut.save();
            res.status(mut.status).send();
        }
        next();
    }
};