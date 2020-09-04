let valor//Não inicializado. O resultado retornará undefined ou indefinido.
console.log(valor)
console.log(valor2)//Retornará is not defined our seja a variavel não foi declarada
// Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null
valor = null//Ausência de valor. Retornará null, nulo, esta vazio na memória.
console.log(valor)
//console.log(valor.toString())// vai dar erro se tentarmos acessar uma variável que esta null - nula

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined//Evite atribuir undefied
console.log(!!produto.preco)
//delete produto.preco - forma de tirar o atributo de um objeto
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)



