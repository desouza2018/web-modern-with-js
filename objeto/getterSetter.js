// AULA 101 GETTER/SETTER
//link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
//link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set
const sequencia = {
    _valor: 1,
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não retornará 900 mas retonará 1002 1003.
console.log(sequencia.valor, sequencia.valor)

/**
 * _valor: 1 - convenção - indica para os devs que esta variável 
 * é preferível ser acessada apenas internamente. 
*/