//Factory simples
//Factory é uma função que no final retorna um objeto. Sempre retorna um novo objeto.
function criarPessoa() {
    return {
        nome: 'Ana',
        sobreNome: 'Silva'
    }
}

console.log(criarPessoa())