// Librerías de 3ros
const request   = require('supertest');
const firebase  = require('../config/firebase');
firebase.init();
const app       = require('../config/app');
describe('Mutant', function() {
    describe('POST', function() {
        
        // it('200 - ejemplo meli', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "ATGCGA",
        //             "CAGTGC",
        //             "TTATGT",
        //             "AGAAGG",
        //             "CCCCTA",
        //             "TCACTG"
        //         ]
        //     })
        //     .expect(200)
        //     .end((err) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });

        // it('200 - múltiples cadenas en diagonal principal y vertical final', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "ATCA",
        //             "TACA",
        //             "TCAA",
        //             "TCGA"
        //         ]
        //     })
        //     .expect(200)
        //     .end((err) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });

        // it('403 - solamente una cadena horizontal', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "GGGG",
        //             "ATCG",
        //             "ATCG",
        //             "CTGA"
        //         ]
        //     })
        //     .expect(403)
        //     .end((err) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });

        // it('200 - una cadena CCCC horizontal y una TTTT vertical', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "CCCCC",
        //             "ATCGT",
        //             "ATCGT",
        //             "CTGAA",
        //             "CTGAC"
        //         ]
        //     })
        //     .expect(200)
        //     .end((err) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });
        
        it('200 - solamente una cadena diagonal y vertical', function(done) {
            request(app)
            .post('/mutant')
            .set('Accept', 'application/json')
            .send({
                dna: [
                    "ATCGA",
                    "TACGT",
                    "TCAGC",
                    "TGAAG",
                    "TACGG"
                ]
            })
            .expect(200)
            .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });

        it('200 - cadenas diagonales interna y externa', function(done) {
            request(app)
            .post('/mutant')
            .set('Accept', 'application/json')
            .send({
                dna: [
                    "ATCGA",
                    "TACAT",
                    "TCAGC",
                    "TAAAG",
                    "TACGG"
                ]
            })
            .expect(200)
            .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });

        // it('403 - 8*8 sin secuencia de caracteres repetidos', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "ATCGATCG",
        //             "TACGTACG",
        //             "TCAGTCAG",
        //             "TGACTGAC", 
        //             "ATCGATCG",
        //             "TACGTACG",
        //             "TCAGTCAG",
        //             "TGACTGAC"]
        //     })
        //     .expect(403)
        //     .end((err) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });

        // it('403 - no llega a la cantidad de N', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "ATC",
        //             "TAC",
        //             "TCA"
        //         ]
        //     })
        //     .expect(403)
        //     .end((err) => {
        //         if (err) return done(err);
        //         done();
        //     });
        // });
        
        // it('200 - dos cadenas repetidas en interior', function(done) {
        //     request(app)
        //     .post('/mutant')
        //     .set('Accept', 'application/json')
        //     .send({
        //         dna: [
        //             "ATCGG",
        //             "TACGC",
        //             "TACAC",
        //             "TAGCC", 
        //             "GCCCC"
        //         ]
        //     })
        //     .expect(200)
        //     .end((err) => {
        //         if (err) return done(err);
        //         done();
        //     });
        // });
    });
});