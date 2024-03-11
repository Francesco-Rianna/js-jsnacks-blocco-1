// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// creo un array vuoto
const numbers = []
for (i = 0; i < 5; i++) {
    // chiedo all'utente i numeri da inserire poi nell'array
    const userNumber = parseInt(prompt('dimmi un numero'))
    if (numbers.includes(userNumber) === false) {
        numbers.push(userNumber)
    }

}

console.log(numbers)
