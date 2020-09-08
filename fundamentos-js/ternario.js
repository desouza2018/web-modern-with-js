const resultado = nota => 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
/* O Operador condicional(ternário) é o único Javascript 
*que Possui três Operandos. 
*Este operador é frequentemente usado como um atalho para a 
* instrução if.
*O operador condicional(ternário) é composto por três partes:
* - A primeira parte é uma expressão exemplo: nota >= 7 , que vai retornoar false ou true,
* seguido de uma (?);
* - a primeira parte 'Aprovado' , vai retornar  aprovado se o resultado for maior igual a 7, dois pontos(:);
* - e a segunda parte 'Reprovado', vai retornar reprovado se o resultado não for >= a 7.
*Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional
 */