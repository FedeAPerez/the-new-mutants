// Pésima implementación, al recorrer otras direcciones fuera de la horizontal requerimos O(n*n) únicmanete para transformar la matrix
const contains = (str, chars) => str.indexOf(chars) != -1;
module.exports = {
    isMutant : function (dnaStr) {
        let words = [
            'CCCC',
            'GGGG',
            'TTTT',
            'AAAA'
        ];
        
        let length = dnaStr.length;
        let ammountFounded = 0;
        // descarto las palabras sin evaluar si la longitud es menor a 4 suponiendo N*N
        if(length < 4) {
            return;
        } else {
            var index = 0;
            // busqueda horizontal O(n*2)
            for(index; index < length; index ++) {
                if(contains(dnaStr[index], words[0]))
                    ammountFounded++;
                if(contains(dnaStr[index], words[1]))
                    ammountFounded++;
                if(contains(dnaStr[index], words[2]))
                    ammountFounded++;
                if(contains(dnaStr[index], words[3]))
                    ammountFounded++;
                // opt
                if(ammountFounded > 1) {
                    break;
                }
            }
            
            // si se iteró sobre todas las cadenas
            if(ammountFounded > 1) {
                return true;
            } else {
                return false;
            }
        }
    }
}