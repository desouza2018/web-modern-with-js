const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] // criando um array chamado notas do tipo const

//sem callback
let notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas [i])
    }
}

console.log(notasBaixas1)

//com callback
/**
 * O método filter() cria um novo array com todos os elementos
 * que passaram no teste implementado pela função fornecida.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function
 */
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)

