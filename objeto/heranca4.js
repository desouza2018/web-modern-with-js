//Aula 124 Heranca4
function MeuObjeto() { }
console.log(MeuObjeto.prototype) /* O atributo prototype existe e ele é um objeto. Return será {}*/

/* Criando duas instâncias de objeto a partir da função MeuObjeto()*/
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

/**
 * Quando instanciamos um objeto - const obj1 a partir de uma função - new MeuObjeto,
 * Será que o prototype desses obj1 ou obj2 - conceito de protótipo(__proto__) 
 * do obj1 ou obj2 apontaram para Object.prototype ou apontaram para MeuObjeto.prototype?
 * Ao criarmos dois objetos obj1, obj2 a partir de uma mesma função construtora MeuObjeto(),
 * Veremos que os protótipos destes objetos obj1, obj2, por padrão, apontam para o mesmo objeto.
 */

console.log(obj1.__proto__ === obj2.__proto__) // retun true
/**
 * Conclusão: 
 * Todos os objetos obj1 e obj2 criados a partir de uma mesma função construtora MeuObjeto(),
 * apontam para o mesmo protótipo a partir do atributo __proto__ .
 */

console.log(MeuObjeto.prototype === obj1.__proto__)// Retorna true

/**
 * Quando criamos um objeto obj1 a partir de uma função construtora MeuObjeto
 * usando "new" - new MeuObjeto(), o protótipo deste objeto obj1, automaticamente aponta para
 * a função que criamos MeuOjeto.prototype.
 * Então, quando criamos uma função a partir de uma função construtora, o __proto__ aponta para
 * a função.prototype - MeuObjeto.prototype e neste caso, o __proto__ não aponta para Object.prototype.
 * O __proto__ apontará para o Object.prototype apenas quando criarmos um objeto a partir do new Object,
 * ou a partir do objeto literal, onde por padrão, o object dele é o Object.prototype.
 * 
 */

// Adicionando um atributo nome ao protótipo da função MeuObjeto
MeuObjeto.prototype.nome = 'Anônimo'

/**
 * Obs:Qualquer objeto que for criado a partir dessa função construtora
 * vai ter no protótipo o atributo nome, pois na função MeuObjeto a partir desse instante,
 * possui o atributo nome. Logo o atributo nome proveniente da função construtora estará acessível.
 */

MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome} !`)
}
/**
 * A partir daqui os atributos nome e falar estarão acessíveis 
 * pelos objetos ou funções criadas a partir da função construtora
 * MeuObjeto, que agora, possuem os atributos nome e falar em seu protótipo.
 */
obj1.falar()

obj2.nome = 'Rafael' //sobescrevendo o valor do atributo nome
obj2.falar()// rentur Bom dia! Meu nome é Rafael

// Criando um novo Objeto obj3
const obj3 = {}

// Criando o obj3 com notação literal de objeto
obj3.__proto__ = MeuObjeto.prototype
/**
 * Em oj3.__proto__ = MeuOjeto.prototype, nós estamos mudando
 * a referência do prototypo do obj3 __proto__, para sair de Object.prototype 
 * para MeuObjeto.prototype. 
 * Logo, a partir daqui o obj3 tem acesso aos atributos nome e a função falar
 *  provenientes do MeuObjeto.
 * 
 */
obj3.nome = 'Oj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // Return true
console.log(MeuObjeto.__proto__ === Function.prototype)        // Return true
console.log(Function.prototype.__proto__ === Object.prototype) // Return true
console.log(Object.prototype.__proto__ === null)               // Return true
console.log(Object.prototype.__proto__ === undefined)          // Return false, poi o atributo existe e é null.