//  Dato un array contenente 10 numeri, stampare in console il numero più grande.


// creo array con 10 numeri
const numbers = [1, 8, 72, 54, 69, 74, 88, 94, 75, 69]

// prendo il primo elemento dell'array per poi confrontarlo  con gli altri
let largestNumber = numbers[0]
// creo il ciclo for per scorrere i numeri dell'array

for (i = 0; i < numbers.length; i++) {
    const listNumber = numbers[i]
    // paragono tutti gli elementi dell'array con l'elemento che ho preso della lista 
    if (listNumber > largestNumber) {
        largestNumber = listNumber
    }

}

console.log(largestNumber)