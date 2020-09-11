/**Valores de retorno são exatamente como soam — valores retornados pela 
 * função quando são concluídos. Você já conheceu os valores de retorno 
 * várias vezes, embora possa não ter pensado neles explicitamente.
 * Veja os links:
 * https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Return_values
 * 
 */
function area(largura, altura){
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}`)
    }else{
        return area +"m²"
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))
