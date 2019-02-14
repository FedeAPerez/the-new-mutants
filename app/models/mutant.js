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
        //busqueda horizontal O(n * n * 4)
        this.dna.forEach(element => {
            if(String(element).indexOf(words[0]) != -1) {
                this.dnaFounded();
                return;
            } else {
                if(String(element).indexOf(words[1]) != -1 ) {
                    this.dnaFounded();
                    return;
                } else {
                    if(String(element).indexOf(words[2]) != -1 ) {
                        this.dnaFounded();
                        return;
                    } else {
                        if(String(element).indexOf(words[3]) != -1 ) {
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