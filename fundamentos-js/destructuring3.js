function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    // Veja no link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    // A função Math.floor(x) retorna o menor número dentre o numero "x"
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand())// vai dar erro pois o objeto esta undefined
