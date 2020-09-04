const valores = [7.7, 8.9, 6.3, 9.2]//Array de posiçao zero a três
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10
console.log(valores)
console.log(valores.length)//Retornará quantos elementos tem no array, que agora são 5

valores.push({id: 3}, false, null, 'teste')//Isto mistura tipos de arrays e não deve ser usado desta forma
console.log(valores)
/*Devemos construir arrays com mesmo tipo de dado.
 *Para cada tipo de dado um array 
 */

 /*A função pop vai pegar o último valor do array, vai saca-lo do array 
 e vai retornar teste excluindo teste do array
 */
 console.log(valores.pop())
 //Outra forma de deletar um valor do array basta usar delete valores[0] e o valor da posição zero será excluido
 delete valores[0]// Será excluido o dado da posição zero do array
 console.log(valores)
 console.log(typeof valores)//Para ver o tipo de valores que é um object