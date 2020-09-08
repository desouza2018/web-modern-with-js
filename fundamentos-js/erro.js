    /*A declaração throw lança uma exceção 
    definida pelo usuário. A execução da função
    atual vai parar (as instruções após o throw 
    não serão executadas), e o controle será passado
    para o primeiro bloco catch na pilha de chamadas. 
    Se nenhum bloco catch existe entre as funções "chamadoras", 
    o programa vai terminar.
    Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw#:~:text=A%20declara%C3%A7%C3%A3o%20throw%20lan%C3%A7a%20uma,catch%20na%20pilha%20de%20chamadas.
    */

function tratarErroLancar(erro){
    //exemplos de thow
    // throw new Error('Ocorreu um erro')
    // throw 10
    // throw true
    throw {
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}
// try - tente fazer isso
function imprirNomeGritado(obj){
    // try - tente fazer isso
    try{
        console.log(obj.name.toUpperCase() + "!!!")
// se ocorreu um erro - catch - trate o erro assim
    }catch(e) {
        tratarErroLancar(e)
    }finally {
        console.log('final')
    }   
}
const obj = {name:'Roberto'}
imprirNomeGritado(obj)