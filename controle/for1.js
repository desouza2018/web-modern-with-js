/*A instrução for cria um loop que consiste em três expressões opcionais, 
dentro de parênteses e separadas por ponto e vírgula, seguidas por uma 
declaração ou uma sequência de declarações executadas em sequência.
Veja os Links:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
https://www.w3schools.com/js/js_loop_for.asp
* */

let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas =[6.7, 7.4, 9.8, 8.1, 7.7]
for(i =0; i < notas.length; i++) { //notas.length para ver o tamanho do array
    console.log(`nota = ${notas[i]}`)//usamor crase
}


