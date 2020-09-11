/**Funções são blocos de construção fundamentais em JavaScript. 
 * Uma função é um procedimento de JavaScript - um conjunto de 
 * instruções que executa uma tarefa ou calcula um valor.
 * Para usar uma função, você deve defini-la em algum lugar no
 *  escopo do qual você quiser chamá-la.
 * Função em JS é First-Class Object (Citizens)
 * Highter-order function
 * Veja os links:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions
 * https://www.w3schools.com/js/js_functions.asp
 * https://www.w3schools.com/js/js_function_definition.asp
 */

function fun1 (){} // cria função de forma literal

const fun2 = function () {} // Armazenar em uma variável
//Armazenar um função dentro de um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}// Armazenar em um atributo do objeto
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)