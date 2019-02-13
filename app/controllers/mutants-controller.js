module.exports = {
    getHome: function(req, res, next) {
        res.status(200).send({
            'hola': 'bebi'
        });
        next();
    }
};