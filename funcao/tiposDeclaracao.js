console.log(soma(3, 4))

//Exemplo 1: function declaration
function soma(x, y) {
    return x + y
}

//Exemplo 2: function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))
//Exemplo 3: named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

/**
 * As function declaration do exemplo 1,podem ser chamadas na escrita do código, antes da função,
 * pois o interpretador lê primeiro as functions declarations - 
 * function soma(x, y) {
    return x + y
 }
 *e as armazena para depois executar as chamadas - console.log(soma(3, 4))
 */

 /**
  * As functions expression exempo 2 e as named functions expression exemplo 3,
  * só poderão ser chamadas depois de serem declaradas.
  */