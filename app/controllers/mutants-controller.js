module.exports = {
    isMutant: function(req, res, next) {
        res.status(403).send({
            'hola': 'bebi'
        });
        next();
    }
};