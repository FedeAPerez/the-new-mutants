const contieneA = (str, chars) => str.indexOf(chars) != -1;

const words = [
    'CCCC',
    'GGGG',
    'TTTT',
    'AAAA'
];

const contarOcurrenciasEnCadena = str => {
    let count = 0;
    if(contieneA(str, words[0]))
        count++;
    if(contieneA(str, words[1]))
        count++;
    if(contieneA(str, words[2]))
        count++;
    if(contieneA(str, words[3]))
        count++;
    return count;
};

const tieneSecuenciasMutantes = numSec => numSec > 1;

module.exports = {
    isMutant : function (dnaStr) {    
        let cantidadCadenas = dnaStr.length;
        let secuenciasEncontradas = 0;
        // descarto las palabras sin evaluar si la longitud es menor a 4 suponiendo N*N
        if(cantidadCadenas < 4) {
            return;
        } else {
            var index = 0;
            // busqueda horizontal O(n*2)
            for(index; index < cantidadCadenas; index++) {
                secuenciasEncontradas += contarOcurrenciasEnCadena(dnaStr[index]);
                // opt
                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }

            // búsqueda vertical
            for(var i = 0; i < cantidadCadenas; i++) {
                let cadenaVertical = '';
                for(var j = 0; j < cantidadCadenas; j++) {
                    cadenaVertical += dnaStr[j][i];
                }
                secuenciasEncontradas += contarOcurrenciasEnCadena(cadenaVertical);
                    // opt
                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }
            // me quedo con los de apartir de 4
            for( var k = 3 ; k < (cantidadCadenas * 2 - 4); k++ ) {
                let cadenaDiagonal = ''
                for( var j = 0 ; j <= cantidadCadenas ; j++ ) {
                    var index = k - j;
                    if( index >= 0 && index < cantidadCadenas && j < cantidadCadenas ) {
                        cadenaDiagonal += dnaStr[index][j];
                    }   
                }
                console.log(cadenaDiagonal);
                secuenciasEncontradas += contarOcurrenciasEnCadena(cadenaDiagonal);

                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }
            
            // si se iteró sobre todas las cadenas debo evaluar
            // al llegar a este lugar no hay más de una ocurrencia
            return false;
        }
    }
}