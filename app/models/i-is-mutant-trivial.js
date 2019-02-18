// O(N)
const contieneA = (str, chars) => str.indexOf(chars) != -1;

const words = [
    'CCCC',
    'GGGG',
    'TTTT',
    'AAAA'
];

// Operación de O(N)
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
        var cantidadCadenas = dnaStr.length;
        var secuenciasEncontradas = 0;
        // descarto las palabras sin evaluar si la longitud es menor a 4 suponiendo N*N
        if(cantidadCadenas < 4) {
            return;
        } else {

            // busqueda horizontal en cadenas completas
            for(let i; i < cantidadCadenas; i++) {
                secuenciasEncontradas += contarOcurrenciasEnCadena(dnaStr[i]);
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

            // me quedo con los diagonales de apartir de 4 - diagonales inferior a superior
            for(var k = 3 ; k < (cantidadCadenas * 2 - 4); k++ ) {
                let cadenaDiagonal = ''
                for( var j = 0 ; j <= cantidadCadenas ; j++ ) {
                    var index = k - j;
                    if( index >= 0 && index < cantidadCadenas && j < cantidadCadenas ) {
                        cadenaDiagonal += dnaStr[index][j];
                    }   
                }
                secuenciasEncontradas += contarOcurrenciasEnCadena(cadenaDiagonal);

                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }
            
            // opt para contar cadenas de a partir de 4 caracteres
            for (var i = cantidadCadenas - 4; i > 0; i--) {
                let cadenaDiagonalSuperior1 = '';
                for (var j = 0, x = i; x <= cantidadCadenas - 1; j++, x++) {
                    cadenaDiagonalSuperior1 += dnaStr[x][j];
                }
                secuenciasEncontradas += contarOcurrenciasEnCadena(cadenaDiagonalSuperior1);

                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }
         
         
            for (var i = 0; i <= cantidadCadenas - 1; i++) {
                let cadenaDiagonalSuperior2 = ''
                 for (var j = 0, y = i; y <= cantidadCadenas - 1; j++, y++) {
                    cadenaDiagonalSuperior2 += dnaStr[j][y];
                 }
                secuenciasEncontradas += contarOcurrenciasEnCadena(cadenaDiagonalSuperior2);

                if(tieneSecuenciasMutantes(secuenciasEncontradas)) {
                    return true;
                }
            }

            // si se iteró sobre todas las cadenas debo evaluar
            // al llegar a este lugar no hay más de una ocurrencia, debería salir previamente
            return false;
        }
    }
}