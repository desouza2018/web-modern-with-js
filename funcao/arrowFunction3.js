let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // no node o escopo global é o global e no browser o escopo global é o windwow.

const obj = {}
/* Associando comparaComthis com o obj a partir
 da função bind, passando o obj como sendo, agora, 
 o this para a chamada desta função.
*A partir de agora, sempre que chamarmos o this,
*ele apontará para obj e não mais para o escopo global.
*/
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // tentando comparar com global retornará false, pois não aponta mais para o global por cause do bind.
comparaComThis(obj) // retornará true pois o this dentro da função acima aponta para o obj.

let comparaComThisArrow = param => console.log(this === param)
/**Sera que o this continuará apontando para o global, como uma
 * função normal apontaria? Veremos que não porque essa função
 * foi definida dentro de um modulo do node(cada arquivo do node
 * representa um module).
 * Então se cada arquivo do node representa um módulo e você escreveu
 * a função diretamente dentro de um arquivo, ele foi escrito, no contexto
 * léxico(qual é o contexto da palavra), ele foi escrito dentro do modulo.
 * Enão quem é o dono dessa função? Quem seria o this(o dono) desta função?
 * Seria o próprio módulo.
 * 
 */
comparaComThisArrow(global)// Retorna false, pois não aponta para o escopo global
/**OBSERVAÇÃO:
 * Se fizermos uma função normal, ela aponta para o global.
 * Se fiermos uma função arrow=>, ela não aponta para o global
 * Percebemos que o this, dentro de uma função tradicional javascript,
 * ele varia conforme a chamada;
 * O this aponta para o objeto global tanto no browser como no node.
 * Já o arrow é bem mais previsível e parece ser mais lógico.
 * No caso da função arrow, o this aponta para o objeto corrente, para o módulo corrente,
 * para o arquivo em que a função foi definida.
 */
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)