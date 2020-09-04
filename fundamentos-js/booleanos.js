let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//! a exclamação é uma negação e !! é uma dupla negação
/*Para transformar um valor em um valor verdadeiro(true) ou falso(false), basta usar
*a negação(!).
*Duas negações !!isAtivo representa que o 1 é verdadeiro(true)
*Ou seja, !!true é verdadeiro e !!false é false
 */

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!texto)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Falson
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)//A propriedade global NaN  é um valor especial que significa Not-A-Number(não é um número)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || 'epa'))
console.log(!!('' || null || 0 || ' '))// (|| é ou)

let nome = 'Lucas'
console.log(nome || 'Desconhecido')//Se colocar o nome sera impresso na tela o nome. se não colocar o nome será impresso na tela Desconhecido