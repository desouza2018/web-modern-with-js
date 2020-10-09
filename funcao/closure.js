/**
 * Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures
 * 
 * Closure é o escopo criando quando uma função é declarada.
 * Esse escopo permite a função acessar e manipular variáveis externas à função.
 */

//Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())