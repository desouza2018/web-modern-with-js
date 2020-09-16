//criando uma função anônima que recebe dois parametros e retorna a soma de dois parametros x e y.
const soma = function (x, y) { 
    return x + y
}
/**Criando uma função imprimirResultado que recebe outra função anônima,
 * e que vai armazenar esta constante(const imprimirResultado) e vai
 * receber três parâmetros: a, b e um terceiro parametro como uma 
 * operação = soma, que vai operar em cima dos parametros a e b que 
 * por padrão, se não for passado nada, assumira a função soma criada acima.
 * 
 */
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))// somente os parametros a e b foram passados
} 

imprimirResultado(3, 4)

/**Como não foi passado o terceiro parâmetro(operação = soma),
 * mas somente o primeiro e sengundo parametro a e b, será assumido 
 * o default (operacao = soma) será chamado o soma e vai somar o valor
 * de 3 e 4.
 * Passamos as variáveis a e b para a função operação, na linha 13.
 * Como por padrão a operação é a soma, os valores de a e b serão passados
 * para x e y e vai retornar a soma de x e y.
 */
imprimirResultado(3,4, soma)

/**Eu posso passar outra função diretamente aqui dentro da chamada da função 
 *imprimirResultado. Então x e y passando aqui por exemplo x menos y aqui eu 
 *também estou passando uma função anônima diretamente na chamada dessa função 
 *imprimirResultado. 
*Note que a abertura dos parentes está aqui e o fechamento dos parêntesis está aqui.
*Então eu tenho um parâmetro de dois parâmetros e o terceiro parâmetro é essa função 
*que ocupa múltiplas linhas, ou seja, eu acabei de passar uma função anônima diretamente
*para a outra função.
Esse tipo de recurso é mais comum do que você imagina em JavaScript. 
*/
imprimirResultado(3, 4, function(x, y){// nesta linha a operacao = soma não foi usada.
    return x - y
})

/*
*Outro exemplo imprimirResultado passando valores 3 e 4
*eu posso passar uma arrow function e como ela tem dois parâmetros,
*eu não posso tirar os parênteses. Então coloco o arrow => x vezes y. 
*Então ele vai passar agora a operação de multiplicação e ele vai
*imprimir o resultado de 3 e 4 passando a operação de multiplicação 
*a partir de um arrow function.
*Quando tenho um arrow function, de fato sempre tenho uma função anônima.
*Não tem como dar nome para uma função arrow, mais uma função tradicional
*ela pode ser uma função nomeada ou uma função anônima, como a gente já viu
* em outros exemplos.
 */
imprimirResultado(3, 4, (x, y) => x * y)

/**
 * Outro exemplo de função anônima é que quando você cria uma função dentro 
 * de um objeto, então você coloca, por exemplo, o atributo falar
 * recebe uma função que é uma função anônima.
 * E aí dentro você vai colocar aquilo que você quer que a função execute.
 * Então no caso que eu coloquei no console.log('Opa'), simplesmente depois eu 
 * chamo pessoa.falar e você acessa essa função anônima a partir do atributo 
 * de um objeto que você definiu em chave valor{}.
 * Eu já falei pra vocês que vocês podem fazer desse jeito ou simplesmente 
 * você pode tirar a palavra function que você pode.
 * Na nova versão do JavaScript a sintaxe acima é valida.
 * Veja abaixo:.
 */

 const pessoa = {
     falar: function() {
         console.log('Opa')
     }
 }

 pessoa.falar()