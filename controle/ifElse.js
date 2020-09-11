const imprimirResultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
/*Veja o link:
* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
* https://www.w3schools.com/js/js_if_else.asp
 */
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')// Cuidado, isto é um tipo String.
//Necessário criar um metodo para que a nota receba somente valor.