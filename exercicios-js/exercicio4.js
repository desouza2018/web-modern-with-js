/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */


//Respostas do professor
  function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)


 //Minha reposta
 function restoDaDivisao(x, y) {
    let resultado = x / y
    let resto = x % y
    console.log(`Resultado da divisão: ${resultado}, Resto da divisão: ${resto}`)
    
 }

restoDaDivisao(8, 3)