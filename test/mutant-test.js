// Librerías de 3ros
const request   = require('supertest');
const app       = require('../config/app');

describe('Mutant', function() {
    describe('POST', function() {
        it('200', function(done) {
            request(app)
            .post('/mutant')
            .set('Accept', 'application/json')
            .send({
                dna: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
            })
            .expect(200)
            .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });

        it('200 - borde mínimo', function(done) {
            request(app)
            .post('/mutant')
            .set('Accept', 'application/json')
            .send({
                dna: ["ATCG","TACG","TCAG","TCGA"]
            })
            .expect(200)
            .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });

        it('403 - borde mínimo', function(done) {
            request(app)
            .post('/mutant')
            .set('Accept', 'application/json')
            .send({
                dna: ["ATCG","TACG","TCAG","TGAC"]
            })
            .expect(403)
            .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });

    });
});