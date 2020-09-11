function teste1(num) {
    if(num > 7)
        console.log(num)// Existe a possibilidade de não usar {}, mas é aconselhável usar a {} nas estruturas if.
    
    console.log('Final')// esta sentença  não esta associada ao bloco if. Logo ela sempre sera impressa ao chamar a função.
}

/*Eu escreveria a função assim ao invés da forma acima:
function teste1(num){
    if(num > 7) {
        console.log(num)
    }
}
*
 */
//teste1(6)
//teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ;, não usar ponto e virgula(;) nas estruturas de controle
        console.log(num)
    }
}
/*OBS: A estrutura de controle if, no caso acima vai até o (;).
O código dentro de {console.log(num)} sempre seré executado independente do if,
pois está depois do (;) do if, portanto, fora do controle if, mas
dentro da função teste2.
*/

teste2(6)
teste2(8)
