// par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exe() {
    const saudacao = 'Fala' // contexto léxico 2
    return saudacao
}

// Objetos são grupos animados de pares nome/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exe())
console.log(client)