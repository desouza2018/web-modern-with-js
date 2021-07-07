//->aponta
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
/** 
 * E aqui eu vou criar um objeto a partir de um constante.
 * A const pessoa = { nome: 'João'} 
 * O que é que acontece quando eu faço isso? 
 * O que acontece é que essa variável identificada como pessoa tem dentro dela
 * um endereço de memória tão pessoal que vou abstraí-lo assim: 
 * Eu vou chamar aqui(pessoa -> 123) de um dos três. 
 * Lá no endereço de memória 123 é que de fato eu tenho o meu objeto criado.
 * Mas o que a variável, o que a constante pessoa aponta é para um endereço e,
 *  esse endereço aponta para o objeto que existe lá no endereço de memória. 
 * Quando eu faço isso:
 */  
pessoa.nome ='Pedro' 
/** 
 * eu não mudei a referência da constante, que não pode mudar,
 * a constante continua apontando para 123, mas o dado, o objeto 
 * que está sendo apontado para esse endereço, que está nesse endereço 123, 
 * pode ser mechido, pode ser alterado. 
 * O que eu não posso alterar, nesse caso, é a constante pessoa. 
 * Então quando faço isso: pessoa.nome ='Pedro'
 * Você dá um console.log(pessoa)
 * você vai perceber que nesse momento, o nome da pessoa não é mais João. 
 * Inicialmente, quando eu criei o objeto, ele era João, mas na linha 16, 
 * eu alterei o valor para Pedro.
 */

// O que acontece se eu fizer isso:
//  pessoa <- {...} <- 456 -> {...}
//pessoa = { nome: 'Ana'}

/**pessoa recebe um objeto cujo nome é Ana.
 * Que eu estou fazendo aqui?
 * O que eu estou tentando atribuir para a pessoa aqui, tentando fazer o seguinte:
 * pessoa vai receber um novo objeto e, esse objeto está no endereço 456 e, esse 
 * endereço aponta pra um novo objeto. 
 * Tentar explicar: aqui a forma como a seta está apontando, acho que não faz muita 
 * diferença não, mas vou colocar como se fosse assim:
 * você está tentando fazer com que a variável pessoa aponte para um novo endereço. 
 * Eu acabei de criar um novo objeto(pessoa), que tem um atributo nome e valor Ana {nome: 'Ana'}. 
 * Só que esse objeto está em outro endereço de memória(456) que eu referenciei de forma abstrata,
 * de forma simbólica, com 456, ou seja, você está tentando fazer com que pessoa deixe de apontar
 * para um endereço 123 e aponte para um endereço 456. 
 * Só que pessoa é uma constante(const). Como constante ela sempre apontará para o objeto que está 
 * em 123 e não poderá apontar para o objeto que está em outro endereço.
 * Esse outro endereço aponta para um outro objeto, mas por ser pessoa uma constante,
 * isso aqui vai gerar um problema.
 * Executando você viu que isso aqui gerou um problema porquê você não pode atribuir, 
 * novamente, para a constante pessoa, nenhum outro objeto que esteja esteja em outro endereço.
 * Obviamente se você criou um outro objeto ele vai estar em outro endereço e não tem como fugir disso. 
 * Então se você fez uma atribuição para uma constante você só pode atribuir pra um constante uma única vez.
*/

Object.freeze(pessoa)// Não deixa adicionar, remover nem apagar atributos do objeto pessoa.

//Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
/** 
 * Object.freeze()
 * O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; 
 * impede que as propriedades existentes sejam removidas; 
 * e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, 
 * ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. 
 * O método retorna o objeto congelado.

Sintaxe
Object.freeze(obj)
*/
pessoa.nome = 'Maria'// O atributo 'Maria' não ocupará o lugar de 'Pedro que é o atual, pois o objeto pessoa esta congelado.
pessoa.end = 'Rua ABC'// O atributo end não será adicionado ao objeto pois ele esta congelado
delete pessoa.nome// O atributo nome não será apagado pois o objeto pessoa esta congelado.

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

/* nem a referência da variável pessoaConstante, nem o atributo nome, nem o valor do atribuido 'João'
* poderá ser alterado, nem apagado.
*/

// aula 99.