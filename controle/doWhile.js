/*A declaração do...while cria um laço que executa uma declaração 
até que o teste da condição for falsa (false). A condição é avaliada
 depois que o bloco de código é executado, resultando que uma declaração
seja executada pelo menos uma vez.
Veja os Links:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while
https://www.w3schools.com/JSREF/jsref_dowhile.asp
* */
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)// Uso da crase para aparecer a variável opção. (`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima')