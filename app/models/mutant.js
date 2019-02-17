const implementation = require('./i-is-mutant-trivial');
const firebase = require('firebase-admin');
const database = firebase.database();

class Mutant {
    constructor(dna) {
        this.status = 403;
        this.dna = dna;
    }
};

Mutant.prototype.dnaFounded = function() {
    this.status = 200;
}

Mutant.prototype.save = function() {
    let ref = database.ref('/adns');
    ref.push({ dna: this.dna, status: this.status});
};

Mutant.prototype.aggregate = function() {
    try {
        let refAgg = database.ref('/adns-agg');
        refAgg.once("value", (data) => {
            if(data.val()) {
                let mutantCount = Number(data.val().mutant_count) + (this.status == 200 ? 1 : 0);
                let humanCount = Number(data.val().human_count) + (this.status == 403 ? 1 : 0);
                console.log(`Conteo Mutantes: ${mutantCount} Humanos: ${humanCount}`);
                refAgg.set({
                    'mutant_count' : mutantCount,
                    'human_count': humanCount
                });
            } else {
                refAgg.set({
                    'mutant_count' : this.status == 200 ? 1 : 0,
                    'human_count': this.status == 403 ? 1 : 0
                });
            }
        });
    } catch(err) {
        // handle error on aggregate
        console.error("falla de agregación");
        console.error(err);
    } finally {
    }
}

Mutant.prototype.isMutant = function() {
    this.status = implementation.isMutant(this.dna) ? 200 : 403;
};

module.exports = Mutant;