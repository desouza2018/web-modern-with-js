/**O comando break encerra o loop atual, switch, ou o loop que foi informado
 *  no label e transfere o controle da execução do programa para o comando seguinte.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break
 * https://www.w3schools.com/js/js_break.asp
 */

 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 for (x in nums) {
     if (x == 5) {
         break
     }
     console.log(`${x} = ${nums[x]}`)
 }

 for (y in nums) {
     if (y == 5){
         continue
     }
     console.log(`${y} = ${nums[y]}`)
 }

 externo: for (a in nums) {
     for (b in nums) {
         if (a == 2 && b == 3) break externo
         console.log(`Par = ${a}, ${b}`)
     }
 }
 /*Evite esta estrutura.
 externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
*/

 console.log('Fim')