/*A condicional if  é uma estrutura condicional que executa
 a afirmação, dentro do bloco, se determinada condição for 
 verdadeira. Se for falsa, executa as afirmações dentro de else.
 Veja os link: 
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
 https://www.w3schools.com/js/js_if_else.asp
 */

 function soBoaNoticia(nota) {
     if(nota >= 7) {
         console.log('Aprovado com ' + nota)
     }else{
         console.log('Reprovado com '+ nota)
     }
 }
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdeEuFalo()// passando nada retorna false
seForVerdeEuFalo(null)// retorna false
seForVerdeEuFalo(undefined)//retorna false
seForVerdeEuFalo(NaN)// retorna false
seForVerdeEuFalo('')// retorna false
seForVerdeEuFalo(0)// retorna false
seForVerdeEuFalo(-1)// retorna verdade true
seForVerdeEuFalo(' ')// verdade true
seForVerdeEuFalo('?')// verdade true
seForVerdeEuFalo([])// true
seForVerdeEuFalo([1, 2])// true
seForVerdeEuFalo({})// objeto vazio é true
