/**O método bind() cria uma nova função que, quando chamada, 
 * tem sua palavra-chave this definida com o valor fornecido, 
 * com uma sequência determinada de argumentos precedendo quaisquer
 *  outros que sejam fornecidos quando a nova função é chamada.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * https://www.w3schools.com/jsref/met_win_setinterval.asp
 */

//function Pessoa() {
//    this.idade = 0
    
//    const self = this  
//    setInterval(function() {//setINterval(function, milliseconds, param1, param2, ...)
//        this.idade++
//        console.log(this.idade)
//    }/*.bind(this)*/, 1000)
//}

//new Pessoa
//OBSERVAÇÃO: SOMENTE O /*.bind(this)*/ está realmente comentado. 
//O motivo: codigo estava correndo sem interrupção. Ctrl + n não funcionou para parar a execução.