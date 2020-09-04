console.log(typeof Object)// retornará que o objetct é uma function
console.log(typeof new Object)//retornará que o object, agora, é um object

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}//ES 2015 (ES6) - ecma script 2015
console.log(typeof Produto)
console.log(typeof new Produto())
/*Quando vc cria um objeto de forma literal utilizando os parenteses(), 
*você esta instanciando o objeto e ali você tem o objetos com seus atributos, seus dados,
 que é diferente de quando você cria uma função como se fosse a sua classe, o seu molde, então ali
 você cria, instancia os seus objetos quantos quiser dentro da sua função 
 */