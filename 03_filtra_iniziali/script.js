/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function cercaNomi(nomi, lettera){
    let arrayNomiSelezionati = [];
    for (let i = 0; i < nomi.length; i++) {
        if(nomi[i].charAt(0) == lettera) {
            arrayNomiSelezionati.push(nomi[i]);
        }
    }
    return arrayNomiSelezionati

}

// Invoca la funzione qui e stampa il risultato in console
console.log(cercaNomi(names, "A"))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]