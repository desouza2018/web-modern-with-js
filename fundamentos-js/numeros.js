const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2//Calculando o total da nota
const media = total /(peso1+peso2)//Calculando a média

console.log(media.toFixed(2))//Para apresentar apeans duas casas decimais utilizamos o toFixed(2)
console.log(media.toString(2))//Para binário
console.log(typeof media)//Usamos typeof media para saber o tipo de dado
console.log(typeof Number)
/*Number é uma função e number é um tipo de dado
*/
