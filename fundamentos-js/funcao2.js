//Imprimir uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito através de uma arrow function =>
const substracao = (a, b) => a - b//=> a - b retorno implicito através de uma arrow function
console.log(substracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')
