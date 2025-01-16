/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function creaSaluto() {
    let saluto = "Ciao";
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
let saluto = creaSaluto();
console.log(`${saluto}`)


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(`${saluto} ${userName}`)