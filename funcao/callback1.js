/**
* Uma função callback é uma função passada a outra função 
*como argumento, que é então invocado dentro da função externa
*para completar algum tipo de rotina ou ação.
*Callback é chamar de volta. 
*A idéia do callback é passar uma função para outra função e
quando um determinado evento acontecer, essa função que foi passada 
vai ser disparada e chamada de volta. Essa função callback pode ser 
disparada de volta várias vezes ou apenas uma única vez, e vai depender
do contexto no qual estamos passando a função.
*
*Veja o link:
*https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function
*/
const fabricantes = [ "Mercedes", "Audi", "BMW"]//criando um array que é uma constante chamada de fabricantes

function imprimir(nome, indice) {//criando a funçao imprimir com nome e indice como parametro
    console.log(`${indice + 1}. ${nome}`)//o indice do array começa a partir do zero, mas aqui o + 1 fara que o indice seja apresentado a partir do 1.
}
/**
 * O método forEach() executa uma dada função em cada elemento de um array.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)//o parametro (a) é cada um do elementos do array Mercedes, /audi e BMW.
})
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))

/**
 * O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. 
 * Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).
 * callback é invocado com três argumentos:
 * o valor do elemento
 * o índice do elemento
 * o array que está sendo percorrido
 * Se um parâmetro thisArg for passado para forEach(), ele será passado para o callback  quando invocado como valor para this. 
 * Caso contrário, o valor undefined será passado como valor para this.
 * O valor de this assumido no callback é determinado de acordo com as regras usuais para determinação do this visto por uma função.
 * O intervalo dos elementos processados por forEach() é determinado antes da primeira invocação do callback. 
 * Elementos que forem adicionados ao array depois da chamada ao forEach() começar não serão visitados pelo callback. 
 * Se os valores dos elementos existentes do array forem alterados, o valor passado para o callback será o valor no momento 
 * em que o forEach() visitá-los; elementos que forem deletados antes de serem visitados não serão visitados.
 * forEach() executa a a função callback uma vez para cada elemento do array – diferentemente de map() ou reduce(), 
 * ele sempre retorna o valor undefined e não é encadeável. O caso de uso típico é alterar o array no final do loop.
 * A única maneira de parar ou interromper um loop forEach() é disparando uma exceção. Se você precisa desse recurso, 
 * o método forEach() é a ferramenta errada. Você estará mais bem servido com um loop simples nesse caso. 
 * Se estiver testando o array de elementos para um predicado e precisar de um valor de retorno Boleano, 
 * você pode usar every() ou some(). Se estiverem disponíveis, os novos métodos find() e findIndex() também podem ser usados 
 * para terminação antecipada em predicados verdadeiros.
 */