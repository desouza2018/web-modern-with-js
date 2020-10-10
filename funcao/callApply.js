/**
 * Veja os links:
 * https://www.w3schools.com/Js/js_function_call.asp
 * https://www.w3schools.com/js/js_function_apply.asp
 * https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 * 
 * Call
 * O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
 * 
 * Apply
 * O método apply() chama uma função com um dado valor this e arguments providos como uma 
 * array (ou um objeto parecido com um array).
 */

 function getPreco(imposto = 0, moeda = 'R$ ') {
     return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
 }

 const produto = {
     nome: 'Notebook',
     preco: 3489,
     desc: 0.15,
     getPreco
 }

 global.preco = 20
 global.desc =  0.1
 console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco:49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.12, '$ '))
console.log(getPreco.apply(global, [0.17, '$ ']))

/**
 * Qual a diferença entre os métodos call e apply? 
 * A diferença está no parâmetro que eles usam. Enquanto o apply irá passar para a função uma array, 
 * o call irá passar valores individuais separados por vírgula.
 * A diferença dessas duas funções é a forma como você passa os parâmetros para a chamada da função, neste caso, getPreco.
 * Você passa os parâmetros, no caso do call, diretamente dentro da função 
 * e quando você está chamando o apply, você passa os parâmetros dentro de uma array.
 */