/** Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
 * O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave 
 * this definida com o valor fornecido, com uma sequência determinada de argumentos
 *  precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada. 
 * Veja o link sobre o bind:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
