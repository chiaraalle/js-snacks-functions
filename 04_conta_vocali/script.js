/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    const vocali = ["a", "e", "i", "o", "u"]; 
    let vocaliTrovate = 0;
    for (let i = 0; i < stringa.length ; i++){
        for (let k = 0; k < vocali.length; k++) {
            if(stringa[i] === vocali[k]){
               vocaliTrovate++;    
            }
        }
    
    }
    return vocaliTrovate;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)