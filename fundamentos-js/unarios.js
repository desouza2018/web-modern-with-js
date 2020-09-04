let num1 = 1
let num2 = 2
//Operador unário é uma operação com apenas um operando
//veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_unario
num1++ // Forma pós-fixada
console.log(num1)
--num1 //Forma pré-fixada
console.log(num1)

console.log(++num1 ===num2--)// === significa extritamente igual
console.log(num1 === num2)