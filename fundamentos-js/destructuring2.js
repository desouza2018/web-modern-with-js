const [a] = [10]// Destructuring usa o operador [] de destructuring
console.log(a)
//Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao
const [n1,  , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
// Um array pode conter outros elementos do tipo array

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
/* Significa - ignore o primeiro array, vá para o segundo array
 e ignore o primeiro dado do segundo array
 *e pegue somente o segundo dado do segundo array
  */
