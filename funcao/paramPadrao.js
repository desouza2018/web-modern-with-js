/**Em JavaScript, os parâmetros de funções tem undefined como valor predefinido. 
 * Contudo, em alguns casos pode ser útil utilizar algum outro valor.
 * É nesta situação em que os parâmetros predefinidos podem ser úteis.
 * No passado, a estratégia de definir valores padrão para parâmetros era testar 
 * os valores do parâmetros no corpo da função e atribuir um valor se este for undefined.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Parametros_Predefinidos#:~:text=Os%20par%C3%A2metros%20predefinidos%20de%20uma,ou%20nenhum%20valor%20seja%20passado.
 */

 //Estratégia 1 para gerar valor padrão
 // || significa ou.
 function soma1(a, b, c) {
     a = a || 1 
     b = b || 1
     c = c || 1
     return a + b + c
 }
 
 console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

 //estratégia 2, 3, e 4 para gerar valor padrão
 // !== diferente de.
 // ? operador ternário
 function soma2(a, b, c) {
     a = a !== undefined ? a : 1
     b = 1 in arguments ? b : 1 // Dentro de arguments existe o indice 1? se existir, pegue o valor de b e não pegue o valor padrão que é o valor 1.
     c = isNaN(c) ? 1 : c // Se a variável c recebe um NaN  retorne um valor padrão e caso c seja um numero retorne c.
     return a + b + c
 }
 
 console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 'hello'))

 // Valor padrão do ES2015 - EcmaScript 2015
 function soma3(a = 1, b = 1, c = 1) {
     return a + b + c
 }

 console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))