const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome +'!'
/*O código abaixo usa crase entre a string(``crase)
 *Veja no site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings 
 * Veja tambem este link: https://www.w3schools.com/jsref/jsref_obj_string.asp
 */
const template = `
Olá
${nome}!`//Abre e fecha as crase
console.log(concatenacao, template)

//Expressões
console.log(`1 + 1 = ${1 + 1}`)// Dentro de uma template streing é possível chamarmos uma função
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)