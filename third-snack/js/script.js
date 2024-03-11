// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// creo array vuoto
const numbers = []
// inizio il ciclo chiedendo 6 volte il numero all'utente

for (i = 0; i < 6; i++) {
    const userNumbers = parseInt(prompt('dimmi un numero'))

    if (userNumbers % 2 !== 0) {
        numbers.push(userNumbers)
    }


}

console.log(numbers)
