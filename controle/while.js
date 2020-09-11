/*A declaração while cria um laço que executa uma rotina especifica
 enquanto a condição de teste for avaliada como verdadeira. 
 A condição é avaliada antes da execução da rotina.
 Veja os links:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 https://www.w3schools.com/js/js_loop_while.asp
* */
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)// Uso da crase para aparecer a variável opção. (`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')