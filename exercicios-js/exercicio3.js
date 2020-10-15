/**
 * 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

 function potenciacao(b, e) {
    /*Método antigo
    let resultado = Math.pow(b, e)
    */

    //Método novo
    resultado = b ** e
    return resultado

 }

 console.log(potenciacao(2, 3))