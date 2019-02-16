class Mutant {
    constructor(dna) {
        this.status = 403;
        this.dna = dna;
    }
};

Mutant.prototype.dnaFounded = function() {
    this.status = 200;
}
const hasWord = (element, word) => element.indexOf(word) != -1;

Mutant.prototype.save = function() {
};

Mutant.prototype.isMutant = function() {
    let words = [
        'CCCC',
        'GGGG',
        'TTTT',
        'AAAA'
    ];

    // descarto las palabras sin evaluar si la longitud es menor a 4
    if(this.dna.length < 4) {
        return;
    } else {
        // potencialmente verdadero
        // first ap Big O : n al 2
        //busqueda horizontal
        dna.forEach(element => {
            if(hasWord(element, words[0])) {
                this.dnaFounded();
                return;

                if(hasWord(element, words[1])) {
                    this.dnaFounded();
                    return;

                    if(hasWord(element, words[2])) {
                        this.dnaFounded();
                        return;

                        if(hasWord(element, words[3])) {
                            this.dnaFounded();
                            return;
                        }
                    }
                }

            }
            
        });

        // genero una matríx inversa
        // AAGG ACTT ACGT AGCT
    }
};

module.exports = Mutant;