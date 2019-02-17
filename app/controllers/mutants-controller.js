const Mutant = require('../models/mutant');

module.exports = {
    isMutant: function(req, res, next) {
        if(!req.body.dna) {
            res.status(403).send();
        } else {
            var mut = new Mutant(req.body.dna);
            mut.isMutant();
            // Operaciones que podrían realizarse desde eventos
            mut.save();
            mut.aggregate();
            res.status(mut.status).send();
        }
        next();
    }
};