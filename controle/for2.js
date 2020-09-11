/**O laço for...in  interage sobre propriedades enumeradas de um objeto, 
 * na ordem original de inserção.  O laço pode ser executado para cada 
 * propriedade distinta do objeto.
 * Veja os links:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
 * https://www.w3schools.com/jsref/jsref_forin.asp
 */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {// usar let para que a variavel fique dentro do bloco de códigos.
    console.log(i, notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome: 'Silva',
    idade: 29 +" anos",
    pesso: 64 +" kg"
}
//É interessante usar a forma abaixo para objetos
for(let atributo in pessoa){
    console.log(`$atributo = ${pessoa[atributo]}`)
}
