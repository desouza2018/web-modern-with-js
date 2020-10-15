/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

 function tipoDoTriangulo(l1, l2, l3) {
     if (l1 === l2 && l2 === l3){
         console.log('O triangulo é Equilatero')
     }else if(l1 === l2 && l2 != l3) {
         console.log('O triangulo é Isóceles')
     }else if(l1 != l2 && l3) {
         console.log('O triangulo é Escaleno')
     }else{
         console.log('Dado incorreto! Informe o comprimento de cada lado do triangulo utilizando numeros.')
     }

 }

 tipoDoTriangulo(3, 4, 5)
 tipoDoTriangulo(4, 4, 4)
 tipoDoTriangulo(5, 5, 11)