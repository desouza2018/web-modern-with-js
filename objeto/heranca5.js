console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/** 
 * String, Array e Object, possuem o atributo .prototype, 
 * pois toda função possui o atributo .prototype.
 */

/**
 * Adicionando um atributo reverse ao protótipo da função String.
 * O atributo reverse recebe uma function que faz seguinte:
 * - this - é através do this que acessamos a string ou o array
 * dentro de um método protótipo;
 *  
 * this - Veja o Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
 * 
 * A palavra-chave this comporta-se um pouco diferente em Javascript se 
 * comparado com outras linguagens. 
 * Também possui algumas diferenças entre o modo estrito e o modo não estrito.
 * Em muitos casos, o valor this é determinado pela forma como a função é chamada. 
 * Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez 
 * que a função é chamada. 
 * ES5 introduziu o método bind para estabelecer o valor this da função, 
 * independentemente de como ela seja chamada, 
 * e ECMAScript 2015 introduziu o arrow functions, cujo this é lexicalmente 
 * delimitado (o valor this é estabelecido segundo o escopo de execução no qual está inserido). 
 * 
 * this - Contexto global
 * No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, 
 * seja em modo estrito ou não. Veja o exemplo abaixo:
 * 
 * console.log(this.document === document); // true
 * 
 * // Em navegadores web, o objeto window é também o objeto global:
 * console.log(this === window); // true
 * 
 * this.a = 37;
 * console.log(window.a); // 37
 * 
 * this - Contexto de função
 * 
 * Dentro de uma função, o valor de this depende de como a função é chamada.
 * 
 * this - Chamada simples
 * Como o código a seguir não está no modo estrito, o valor de this não é 
 * definido pela chamada. Por padrão, this será o objeto global que no navegador é o window.
 * Veja exemplo abaixo:
 * 
 * function f1(){
 *   return this;
 * }
 * 
 * // No navegador
 * f1() === window; // true
 * 
 * this - Modo Estrito
 * 
 * Em modo estrito, o valor de this permanece seja qual for o definido ao 
 * entrar no contexto de execução, assim, no caso a seguir, 
 * this por padrão será indefinido (undefined):
 * 
 * function f2(){
 *   "use strict"; // assume modo estrito
 *   return this;
 * }
 * 
 * f2() === undefined; // true

 *  
 * Veja o Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * O método split() divide uma String em uma lista ordenada de substrings, 
 * coloca essas substrings em um array e retorna o array. 
 * A divisão é feita procurando um padrão, onde o padrão é fornecido como 
 * o primeiro parâmetro na chamada do método. Veja o exemplo abaixo:
 * 
 * const str = 'The quick brown fox jumps over the lazy dog.';
 * const words = str.split(' ');*
 * console.log(words[3]);
 * // expected output: "fox"
 * 
 * const chars = str.split('');
 * console.log(chars[8]);
 * // expected output: "k"
 * 
 * const strCopy = str.split();
 * console.log(strCopy);
 * // expected output: Array ["The quick brown fox jumps over the lazy dog."]

 * 
 * - Array.prototype.reverse() 
 * 
 * Veja o Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * 
 *  O método reverse() inverte os itens de um array. 
 *  O primeiro elemento do array se torna o último e o último torna-se o primeiro.
 * Veja o código de exemplo abaixo:
 * 
 * var myArray = ['one', 'two', 'three'];
 * myArray.reverse();
 * 
 * console.log(myArray) // ['three', 'two', 'one']


 * 
 * - .join reagrupa os elementos do array, formando uma string, uma palavra,
 * porém invertida em relação a original. 
 * 
 */

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // retornará r3doC alocsE

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4].first())    // Return 1
console.log(['a', 'b', 'c'].first()) // Return a

/**
 * Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toString
 * 
 * String.prototype.toString()
 * O método toString() retorna uma string representando o objeto especificado.
 * 
 * Descrição
 * O objeto String substitui o método toString() do objeto Object.
 *  Ele não herda Object.prototype.toString(). 
 * Para objetos String, o método toString() retorna uma representação 
 * de string do objeto e é o mesmo que o método String.prototype.valueOf().
 * 
 * Usando toString()
 * O exemplo a seguir exibe o valor string de um objeto String:
 * 
 * var x = new String('Hello world');
 * 
 * console.log(x.toString()); // retorna 'Hello world'
 * 
 * Não sobescreva a função toString que já 
 * existe no prototype.toString.
 * Logo não faça como no código abaixo:
 * 
 * String.prototype.toString = function () {
 *    return 'Lascou turo'
 * }
 * 
 * console.log('Escola Cod3r'.reverse()) // Retornará orut uocsaL
 */


