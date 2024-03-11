// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.


//  valore zero alla somma

let sum = 0

// faccio un ciclo in cui domando all'utente 5 volte un numero

for (i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt('dimmi un numero'))
    sum = sum + userNumber
}

console.log(sum)