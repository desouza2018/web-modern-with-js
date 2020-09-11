/*A condicional switch avalia uma expressão, combinando
 o valor da expressão para um cláusula case, e executa 
 as instruções  associadas ao case.
 Veja os links:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
 https://www.w3schools.com/js/js_switch.asp
  */
const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break //O break é para que a execução para aqui se o case 9 for executado.
        case 8: case 7:
            console.log('Aprovado')
            break
        //se o default for utilizado aqui, devemor usar o break no final do bloco de código dele.    
        //default:
        //    console.log('Nota Inválida')
        //    break    
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: 
            console.log('Nota Inválida')         
    }
}

imprimirResultado(10)
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(2.3)
//imprimirResultado(-1)
//imprimirResultado(11)