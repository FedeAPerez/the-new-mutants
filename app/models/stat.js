const firebase = require('firebase-admin');
const database = firebase.database();

class Stat {
    constructor() {
        this.count_mutant_dna = 0;
        this.count_human_dna = 0;
        this.ratio = 0;
    }
};

Stat.prototype.getStats = function(statOb = null) {
    return new Promise((resolve, reject) => {
        try {
            let refAgg = database.ref('/adns-agg');
            refAgg.once("value", (data) => {
                if(data.val()) {
                    this.count_human_dna = Number(data.val().human_count)
                    this.count_mutant_dna = Number(data.val().mutant_count);
                }
                resolve();
            });
        } catch(err) {
            // error handler de lectura de agg
            reject();
        }
    });

};

Stat.prototype.getAverage = function() {
    try {
        this.ratio = this.count_mutant_dna / this.count_human_dna;
        this.ratio = this.ratio.toFixed(3);
    } catch(err) {
        // error handler de calculo de ratio
    }
}

module.exports = Stat;