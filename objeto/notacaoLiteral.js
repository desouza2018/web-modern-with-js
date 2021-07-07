// AULA 100
// LINK: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 ={[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {// forma tradicional
        //...
    },
    funcao2() {//forma reduzida a partir da versão mais nova do javascript es6.
        //...
    }
}
console.log(obj5)

/**
 * Pessoal na versão do eco 2015 tiveram muitas mudanças em todas as áreas da linguagem. 
 * Uma delas foi algumas melhorias sobre a notação literal de objetos eu vou tratar de algumas melhorias 
 * na sala. Algumas agente já viu, já trabalhou com elas e outras eu vou falar aqui especificamente na sala. 
 * Então vou criar um novo arquivo chamado notaçãoLiteral.js.
 * E nós vamos ver especificamente sobre essas melhorias na notação literal do objeto. 
 * Então antes de criar o objeto eu vou criar aqui três constantes: uma constante a que recebe 1, 
 * uma constante b que recebe 2 e uma constante c que recebe 3.
 * Antigamente, antes da versão ES6, agente tinha que criar um objeto usavando a simplicidade. 
 * const obj1 = {a: a, b: b, c: c}.  
 * Só que esse tipo de duplicidade não é mais necessário. Você pode simplesmente criar um objeto, 
 * colocando a,b e c:
 * const obj2 = {a, b, c}
 * que automaticamente, ele vai assumir o nome da constante que vai ser o nome do atributo criado dentro desse objeto. 
 * Obviamente se você quiser mudar o nome do atributo, você tem que colocar a notação de cima: 
 * const obj1 = {a: a, b: b, c: c}. Essa notação permite que você mude o nome do atributo 
 * e não seja exatamente o nome da constante. 
 * Mas quando você tem esse caso que são exatamente iguais, você pode se beneficiar dessa nova sintaxe 
 * mais reduzida. 
 * Então, console.log(obj1, obj2).
 * Vocês vão perceber que os dois são exatamente iguais: { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }. 
 * Outra melhoria vem quando você quer criar, dinamicamente, um atributo em um objeto,
 * usando por exemplo, uma string. Eu falei isso nesse capítulo.
 * Por exemplo: você tem o nome de um atributo - const nomeAttr - chamado nota - const nomeAttr = 'nota' e, 
 * você tem o valor desse atributo - const valorAttr = 7.87 .
 * É muito fácil, em javascript, você criar um atributo a partir do nome de uma variável, do valor de uma variável. 
 * Então você pode por exemplo, usar aquela notação de colchetes - const obj3 = {}.
 * Eu criei um objeto aqui literal const obj3 = {}, 
 * e coloca o obj3[nomeAttr] = valorAttr - nome do atributo recebe o valor do atributo. 
 * Então se eu imprimir no console o valor desse obj3, Vocês vão perceber que ele vai ter um atributo 
 * nota a partir do valor dessa variável. 
 * No caso do sistema o valor 7.87, que forneci aqui nessa constante, entrou na mesma forma que eu 
 * fiz aqui em cima na notação literal de objetos na versão 9. 
 * Também suporta esse tipo de nomenclatura eu coloco entre colchetes no caso a constante ou variável que 
 * eu quero usar para criar o atributo do objeto e ele vai pagar o valor dessa constante ou variável que 
 * um atributo com esse valor. 
 * Então ele criou o atributo chamado nota 2 pontos valor ou atributo imprimia ao console e o algum objeto. 
 * 4 Você vai ver que é exatamente a mesma coisa criando aqui um outro objeto constante objeto. 
 *  5 Uma das mudanças em relação à notação também literária objetos que forma simplificada foi a questão 
 * de como você definir funções dentro de um objeto literal. 
 * A forma antiga e a forma padrão um valor. 
 * Então você coloca por exemplo são dois pontos fixos e aí você coloca por baixo. 
 * Quem já viu anteriormente você coloca a chave função em dois pontos recebe uma função anônima. 
 * E aqui dentro você faz o que quiser fazer na função na forma nova como em 2015 o S6 foi acrescido na 
 * notação literal do objeto que houve melhorias. 
 * Você pode fazer simplesmente não coloca função dois parentes e cria a função e dentro você faz o que 
 * quiser com função ou seja você tirou a palavra em O Fuxico tirou os dois pontos e simplesmente tem a 
 * forma reduzida uma forma mais curta de definir uma função dentro de um objeto a partir da versão mais 
 * nova do JavaScript. 
 * Então pra finalizar vou colocar aqui o console logo imprimindo o objeto 5 você vai ver que o objeto 
 * 5 tem duas funções a função e a função 2 as duas formas funcionam tranquilamente. 
 * Essa é a forma tradicional quem já estava acostumado a essa forma reduzida que foi adicionada no começo 
 * de 2015. 
 * Pesquisar em todas as perguntas do curso 
 * Pesquisar em todas as perguntas do curso
 */