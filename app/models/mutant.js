class Mutant {
    constructor() {
        this.status = 403;
    }
};

Mutant.prototype.dnaFounded = function() {
    this.status = 200;
}

Mutant.prototype.isMutant = function(dna) {
    let status = 403;
    let words = [
        'CCCC',
        'GGGG',
        'TTTT',
        'AAAA'
    ];

    // descarto las palabras sin evaluar si la longitud es menor a 4
    if(dna.length < 4) {
        return;
    } else {
        // potencialmente verdadero
        // first ap Big O : n al 2
        //busqueda horizontal
        dna.forEach(element => {
            if(String(element).indexOf(words[0]) != -1) {
                this.dnaFounded();
                return;

                if(string(element).indexOf(words[1]) != -1 ) {
                    this.dnaFounded();
                    return;

                    if(string(element).indexOf(words[2]) != -1 ) {
                        this.dnaFounded();
                        return;

                        if(string(element).indexOf(words[3]) != -1 ) {
                            this.dnaFounded();
                            return;
                        }
                    }
                }

            }
        });

        // genero una matríx inversa
    }
};

module.exports = Mutant;