/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function creaSaluto(nome) {
    let mattina = `buongiorno ${nome}`; 
    let pomeriggio = `buon pomeriggio ${nome}`; 
    let sera = `buonasera ${nome}`; 
    const orario = new Date();
    let ore = orario.getHours();
    //console.log(ore);
    if(ore <= 13){
        return mattina
    } else if (ore <= 17){
        return pomeriggio
    } else {
       return sera
    }
    
}

// Invoca la funzione qui e stampa il risultato in console
//creaSaluto();
console.log(creaSaluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.