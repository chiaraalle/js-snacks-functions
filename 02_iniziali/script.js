/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
 

// Dichiara la funzione qui.
function trovaIniziali(nomi){
    let arrayIniziali=[];
    for (let i = 0; i < nomi.length; i++) {
        arrayIniziali.push(nomi[i].charAt(0));
    } 
    return arrayIniziali;    
}

// Invoca la funzione qui e stampa il risultato in console
console.log(trovaIniziali(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]