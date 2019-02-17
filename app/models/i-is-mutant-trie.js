const Trie = require('./trie');
module.exports = {
    isMutant : function (dnaStr) {
        let words = [
            'CCCC',
            'GGGG',
            'TTTT',
            'AAAA'
        ];
        
        let length = dnaStr.length
        // descarto las palabras sin evaluar si la longitud es menor a 4
        if(length < 4) {
            return;
        } else {
            let trieSearch = new Trie();
            // potencialmente verdadero
            // first ap Big O : n al 2
            // insert horizontal
            var i = 0;
            for(i; i < length; i++) {
                trieSearch.insert(dnaStr[i]);
            }
            var j = 0;
            for(j; j < words.length; j++) {
                console.log("FOUNDED "+ trieSearch.find(words[j]) );
            }
        }
    }
}