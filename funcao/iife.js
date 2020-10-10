/**
 * IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
 * É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. 
 * A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo
 *  às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.
 * A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE
 * 
 * 
 */

 (function() {
     console.log('Será executado na hora')
     console.log('Foge do escopo mais abrangente!')
 })()