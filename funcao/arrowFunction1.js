/**Uma expressão arrow function possui uma sintaxe mais curta quando 
 * comparada a uma expressão de função (function expression) e não tem 
 * seu próprio this, arguments, super ou new.target. Estas expressões de 
 * funções são melhor aplicadas para funções que não sejam métodos, e elas 
 * não podem ser usadas como construtoras (constructors).
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * Arrow functions were introduced in ES6.
 *  Arrow functions allow us to write shorter function syntax.
 * Veja o link:
 * https://www.w3schools.com/js/js_arrow_function.asp
 */
let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá' // possui parametro
console.log(ola())
