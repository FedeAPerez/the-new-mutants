module.exports = {
    get: function(req, res, next) {
        res.status(200).send({
            'mutant': 'api challenge'
        });
        next();
    }
};