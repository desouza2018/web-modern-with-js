// AULA 122
//Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
//Link: https://www.w3schools.com/js/js_object_prototypes.asp
// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'// Não faça isso em casa
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr2)
console.log(filho.attr0, filho.attr1, filho.attr2)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


/** 
 * Agora vamos mostrar um pouco desse conceito da cadeia de protótipos na prática.
 * Então vamos criar um novo arquivo chamado herança2.js.
 * Nós vamos por exemplo, criar uma cadeia de protótipos para vermos na prática esse
 * conceito que é muito importante que é o Prototype.
 * Então vou criar aqui uma constante chamada avo que vai ser um objeto que vai ter o 
 * atributo1 e ele vai ter um valor 'A'.
 * 
 * const avo = {attr1: 'A'}
 * 
 * Então a ideia é criar três objetos:
 * o avô;
 * Depois eu vou criar o pai que tem o pai tem como protótipo o avô.
 * Depois eu vou criar o filho que tem como protótipo o pai.
 * Então, a partir do filho, se eu pegar um atributo que o filho não tem, ele vai procurar no pai 
 * não achando no pai, procurará no avô.
 * Então vou criar aqui uma segunda constante chamada pai. 
 * E aí para eu referenciar que o pai tem como protótipo o avô, eu tenho que atribuir
 * na propriedade __proto__:avo, então, logo eu posso colocar os outros atributos relacionados
 * ao objeto pai.
 * 
 * const pai = {__proto__: avo, attr2: 'B'} 
 * Eu estou usando a notação literal de objetos.
 *  
 * A terceira constante, a constante do filho, tem como protótipo o pai(__proto__: pai) e tem um atributo 3(attr3):
 * 
 * const filho = {__proto__: pai, attr3: 'C'}
 * 
 * Então o pai tem um atributo 2 attr2 e com o valor 'B'.
 * O avô tem um atributo attr1 com o valor 'A'.
 * O filho tem um atributo três attr3 com o valor 'C'.
 * 
 * Sei que o filho tem como protótipo o pai __proto__: pai:
 * const filho = {__proto__: pai, attr3: 'C'}
 * 
 * O pai tem como protótipo o avô __proto__: avo:
 * const pai = {__proto__: avo, attr2: 'B'}
 * 
 * e o avô tem como protótipo o Object.prototype:
 * Object.prototype.
 * Eu não mudei e a gente já viu isso na aula passada.
 * 
 * Então continuando eu posso chamar:
 * console.log(filho.attr1)
 * Então será verificado: o filho tem attr1? 
 * A resposta será: Não.
 * Então vou procurar no meu protótipo que é o pai -  const filho = {__proto__: pai, attr3: 'C'}.
 * O pai tem atributo 1 attr1? const pai = {__proto__: avo, attr2: 'B'}
 * A resposta é: Não. 
 * Então o pai diz: - vou procurar no meu protótipo que é o avô __proto__: avo, 
 * para ver se o avo tem atributo  attr1.
 * Então ele vai mostrar: A.
 * Porque ele procurou no filho e não tinha no filho.
 * Procurou o attr1 no pai e também não tinha no pai. 
 * Logo procurou no avo e encontrou no avo o atributo attr1 e, finalmente, o encontrou:
 * const avo = {attr1: 'A'}, retornando o seu valor: A.
 * 
 * Se eu colocar por exemplo o atributo zero attr0:
 * console.log(filho.attr0)
 * 
 * Será verificado:
 * O filho tem o atributo zero attr0? const filho = {__proto__: pai, attr3: 'C'}
 * A resposta é: o filho não tem o atributo attr0. Então procura no protótipo do filho 
 * que é o pai: __proto__: pai.
 * 
 * Verifique se o pai tem o atributo attr0? const pai = {__proto__: avo, attr2: 'B'}
 * o pai também não tem o atributo attr0: const pai = {__proto__: avo, attr2: 'B'}.
 * Então procura no protótipo de pai que é o avo: __proto__: avo.
 * 
 * verifique se o avo tem o atributo attr0? const avo = {attr1: 'A'}.
 * O avo também não tem o atributo attr0: const avo = {attr1: 'A'}.
 * Então procura no protótipo do avo que é Object.prototype.
 * No Object.prototype tem o atributo attr0, sim ou não?
 * Não tem. Então significa que não defini.
 * Logo retornará: undefined.
 * 
 * Se eu fizer um experimento e colocar aqui como exemplo, Object.prototype, adicionar
 * outro atributo zero attr0 - Object.prototype.attr0 = '0', o que ocorrerá?
 * Você vai ver que ele vai achá-los e porquê?
 * Porque ele procurou no meu próprio filho e não tem.
 * Procurou no protótipo do filho que é o  pai e também não tem.
 * Procurou no próprio pai e não tem.
 * Procurou no protótipo do pai que é o avo e também não tem.
 * Procurou no proprio avô e também não tem.
 * Logo procurou no protótipo do avo que é o Object.prototype 
 * e ele achou o atributo attr0 que era zero: Object.prototype.attr0 = '0'.
 * Retornará zero: 0.
 * 
 * Continuado:
 * Fazendo isso: 
 * 
 * console.log(filho.attr2) - Que ocorrerá?
 * 
 * O filho não tem o atributo attr2 - const filho = {__proto__: pai, attr3: 'C'};
 * mas o pai  tem o attr2 - const pai = {__proto__: avo, attr2: 'B'}.
 * Então ele vai resolver e retornará:
 * B 
 * 
 * Fazendo isso: console.log(filho.attr0, filho.attr1, filho.attr2), que ocorrerá?
 * Ele mostrou:
 * 0 A B.
 * 
 * Agora, fazendo isso: console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3), que ocorrerá?
 * Retornará isso: 
 * 0 A B C - que são os valores dos attr0, attr1, attr2, attr3, respectivamente.
 * 
 * O terceiro atributo que é um attr3 = 'C' - que é um attributo do próprio filho, 
 * que uma vez encontrado, mesmo que tenha o atributo 3 attr3 em outros objetos na casa de protótipo,
 *  por exemplo assim:
 * 
 * Object.prototype.attr0 = '0'
 * const avo = {attr1: 'A'}
 * const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
 * const filho = {__proto__: pai, attr3: 'C'}
 * console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
 * 
 * obviamente, ele vai procurar responder o primeiro atributo 3 que seria o attr3: 'C'.
 * Então neste caso, ele vai encontrar o 'C' do filho e não '3' do pai 
 * porque no filho, ele já encontrou o atributo attr3: 'C'.
 * Então aqui acabou acontecendo o que ele chama de SOMBREAMENTO. 
 * Esse atributo 3 attr3 do filho sombreou o atributo 3 attr3 do pai e dos objetos que estão mais acima na cadeia, 
 * como se fosse uma sobrescrita. Você sobrescreveu aquele valor no objeto mais específico.
 * Então se ele encontrou naquele objeto não tem porque ele procurar mais na cadeia de protótipos.
 * É a mesma coisa que acontece quando você tem uma variável dentro de uma função de nome X 
 * e você usa uma variável de nome X aqui no seu código e ele vai procurar dentro da função.
 * Se achou, aí não precisa procurar no escopo mais abrangente até encontrá-la.
 * Se não tem a variável x local na sua função, ele procura num escopo maior e assim
 * vai procurando até encontrar e se não encontrar, retornará undefined.
 * 
 * Vimos aqui um exemplo bem interessante de cadeia de protótipo.
 */

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax: 324 // Shadowing - sombreamento
}

const volvo = {
    modelo:'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
        
}

Object.setPrototypeOf(ferrari, carro)// A partir daqui ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

/*
 *  Vou criar um exemplo um pouco mais complexo.
 *  vou criar aqui uma constante carro;
 *  vou definir a velocidade atual zero;
 *  vou definir uma velocidade máxima por padrão 200; 
 * Vou criar aqui uma função e chamar de aceleraMais que vai receber Delta,
 * que seria a diferença que eu quero acelerar.
 * E ele vai fazer um teste:
 * se a velocidade atual mais o delta é menor ou igual a velocidade máxima,
 * pode acelerar e que ele não vai ultrapassar a velocidade máxima.
 * Caso o Delta mais a velocidade atual ultrapasse a velocidade máxima,
 * vou forçar a velocidade atual ser exatamente igual a velocidade máxima. 
 * Então vou criar uma outra função chamada status só para gente mostrar no console este valor. 
 * Veja:
 * 
 * status() {
 *       return `${this.velAtual}km/h de ${this.velMax}km/h`
 *   }
 * 
 * Então, this.velAtual km/h de this.velMax km/h que é exatamente em que velocidade o carro esta.
 * 
 * Agora vou criar outros objetos:
 * 
 * const ferrari = {
 *   modelo:'F40',
 *   velMax: 324 // Shadowing - sombreamento
 * }
 * 
 * Então no momento que eu defino a Ferrari tendo como protótipo o carro,
 * esse atributo velMax vai aplicar sombra(shadowing - sombreamento), ou seja, vai sombrear 
 * o atributo original do objeto o carro.
 * Então aqui ocorre o que chamamos de Shadow que é o sombreamento que também acontece quando
 * você tem uma variável local,dentro de uma função.
 * A variável velMax do objeto carro, por exemplo. 
 * Essa variável pode sombrear a variáveis de escopo mais abrangente.
 * Isso é muito comum, não só em JavaScript, mas em várias linguagens de programação. 
 * 
 * Vou criar um objeto chamado volvo apenas com um modelo e que vai receber o retorno
 * inclusive a velocidade máxima padrão do objeto do carro. 
 * Só que não estabeleceu ainda a relação de protótipo, mas vou estabelecer daqui a pouco,
 * usando uma "forma diferente de definir o protótype de um objeto". 
 * Eu vou fazer a mudança. Vou sombrear também aqui a função status:
 * 
 * const volvo = {
 *   modelo:'V40',
 *   status() { sombreando a função status, àquela que está no objeto carro
 *
 *   }
 * 
 * em vez de usar a função status normal eu vou usar ela com alguma adição a mais.
 * Vou usar uma palavrinha chamada super. Veja abaixo:
 *                                   I
 * const volvo = {                   I 
 *   modelo:'V40',                   I
 *   status() {                      I
 *       return `${this.modelo}: ${super.status}`       
 *   }              I          
 *                  I_____________I
 * Da mesma forma como eu uso o "this" para referenciar o objeto atual, 
 * Eu uso o "super" para referenciar o meu protótipo.
 * Então farei o seguinte:
 *  return `${this.modelo}: ${super.status}`
 * 
 * Eu estou sobrescrevendo, sobreando a função status a partir do meu objeto Volvo(const volvo). 
 * Por enquanto ela é uma função independente porque não estabeleci a relação de protótipo ainda, 
 * mais já vou fazer isso. 
 * O fato é que ele vai usar o "this.modelo" que é o modelo do meu objeto atual, la no objeto volvo.
 * Claro se ele não encontrar um modelo ele vai procurando nos objetos acima. 
 * E o "super.status", como estou trabalhando com o mesmo nome de método,
 * se eu chamar o "this" ele vai ficar invocando, de forma recursiva,
 * o mesmo método e isto nao e o que eu quero.
 * Eu quero que ele chama o método do meu protótipo. Por isso eu uso o super aqui. 
 *                                                                       I
 * const volvo = {                   I------------------------------------ 
 *   modelo:'V40',                   I
 *   status() {                      I
 *       return `${this.modelo}: ${super.status}`       
 *   }
 * 
 * Continuando, agora eu vou estabelecer a relação do protótipo usando uma função chamada
 * setPrototypeoff().
 * Eu vou colocar o nome do meu objeto, no caso aqui, da Ferrari e depois,
 * o segundo parâmetro é o meu protótipo, que seria o carro. Veja abaixo
 * 
 * Object.setPrototypeOf(ferrari, carro)
 * 
 * Nesse momento, eu estabeleci uma relação entre Ferrari e carro, ou seja,
 * a ferrari tem o carro como seu protótipo.
 * E esse método também é um método especificado pela linguagem.
 * você pode usar ele onde suporta JavaScript, esse método vai existir.
 * É um dos métodos que eu não mencionei naqueles métodos e funções importantes de Object.
 * Aqui mais uma função muito importante:
 * Object.setPrototypeOf(ferrari, carro)
 * 
 * OBS: é a função que estabelece uma "relação de protótipo entre dois objetos".
 * Primeiro você tem um objeto e depois você tem um protótipo daquele objeto.
 * Neste caso, "ferrari" vai ter como "protótipo" "carro".
 * Seria equivalente a eu colocar um atributo __proto e apontar para carro. 
 * Aqui faz um processo equivalente:
 * Object.setPrototypeOf(ferrari, carro)
 * 
 * Então vou colocar:
 * Object.setPrototypeOf(volvo, carro).
 * 
 * A partir daqui eu consigo acessar os atributos tanto de Ferrari,
 * quanto aos atributos que eu recebi a partir do meu protótipo e também
 * chamar funções como por exemplo acelerar.
 * Cabe uma observação importante que é o seguinte:
 * - a ferrari tem dois atributos(modelo e velMax) e dentro de Ferrari eu não tenho
 * - nenhuma função declarada a não ser as funções que eu recebi a partir do meu protótipo.
 * - Veja:
 * 
 * const ferrari = {
 *   modelo:'F40',
 *   velMax: 324 // Shadowing - sombreamento
 * }
 * 
 * Quando eu executo esse código:
 * console.log(ferrari)
 * 
 * Você vai ver que na hora de imprimir o objeto, ele simplesmente,
 * pegou os atributos que pertencem de fato ao objeto ferrari,
 * que você definiu aqui dentro do objeto mesmo. Veja:
 * { modelo: 'F40', velMax: 324 }
 * 
 * Então se imprimirmos volvo:
 * console.log(volvo)
 * 
 * você vai ver que vai ser diferente. 
 * O volvo vai mostrar o modelo e a função status. Veja:
 * { modelo: 'V40', status: [Function: status] }
 * 
 * Então no volvo eu tenho o modelo e a função status 
 * mas não tem velMax, embora o volvo consiga referenciar a velMax
 * a partir da procura nos protótipos.
 * Então por padrão, quando você chama um objeto e sua string,
 * aquela função que converte o objeto para a string é chamada, 
 * Ele vai ler os atributos e as funções que pertencem ao objeto,
 * mas isso não quer dizer que você não consiga chamar os métodos
 * que estão no protótipo.
 * Então coloco aqui:
 * volvo.acelerarMais(100)
 *  
 * ele vai acelerar até 100 km/h e eu posso colocar aqui:
 * console.log(volvo.status()).
 * Ele vai tanto mostrar o modelo, como vai chamar o super.status()
 *                                                      I 
 * const volvo = {                                      I
 *   modelo:'V40',                      I----------------
 * status() {                           I
 *       return `${this.modelo}: ${super.status()}`
 *   }
 * 
 * já que o programei dessa forma.
 * Então executando o codigo
 * volvo.acelerarMais(100),
 * ele mostrou:
 * 
 * V40: 100km/h de 200km/h
 * 
 * o V40 que é o modelo que está a 100km/h de 200km/h,
 * ou seja, ele encontrou, não só chamou a função status do pai, 
 * como aqui ele deu a velMax, que está presente, a partir de herança,
 * dentro do meu objeto Volvo.
 * 
 * Posso fazer a mesma coisa com ferrari:
 * 
 * ferrari.acelerarMais(300),
 * para acelerar até 300km/h.
 * Coloca no console:
 * 
 * console.log(ferrari.status()).
 * 
 * A ferrari.status(), vai chamar o próprio método direto de carro,
 * sem nenhuma alteração, já que eu não soubescrevi o método aqui embaixo.
 * Então executando:
 * 
 * console.log(ferrari.status())
 * 
 * Perceba que a velocidade máxima foi sobrescrita.
 * Ela vai fazer um sombreamento sobre a velMáx que está presente diretamente no carro:
 * 
 *  const ferrari = {
 *   modelo:'F40',
 *   velMax: 324 // Shadowing - sombreamento
 * }
 * 
 * inclusive esse método:
 * 
 * status() {                               este método
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
 * 
 * vai ler a velMax que está dentro de ferrari e não a que está dentro do carro,
 * porque o this, nesse momento, não é carro e sim ferrari.
 * Então executando:
 * 
 * ferrari.acelerarMais(300)
 * console.log(ferrari.status())
 * 
 * você vai ver que a velMax da ferrari é de 300km/h de 324km/h.
 * Se eu tentar aumentar a velocidade do volvo para 300:
 * volvo.acelerarMais(300)
 * e der um console.log(volvo.status()),
 * 
 * ele vai chegar no máximo a 200km/h, já que eu apliquei a validação 
 * que faz isso.
 * 
 * Então vimos várias coisas interessantes sobre herança.
 * Vimos a cadeia de protótipos chegando até o Object.prototype.
 * Como o Object.prototype é um objeto, você pode adicionar atributos
 * e comportamentos dentro desse prototype. No entanto, você precisa ter muito cuidado.
 * Não é recomendado que você fique fazendo isso:
 * 
 * Object.prototype.attr0 = '0'// Não faça isso em casa
 * 
 * Então evite esse tipo de manipulação porque isso vai impactar em toda estrutura do
 * seu código. 
 * Se você quer fazer alguma coisa que seja global você poderia até recorrer a
 * esse cara mas é algo que você tem que fazer com muito cuidado. 
 * Não é uma coisa que eu diria:
 * - não faça em nenhuma situação.
 * - Você nunca pode fazer isso?
 * - Claro que não, mas você tem que ter muito cuidado, porque você vai estar
 * impactando todos os objetos da sua aplicação, a partir do momento que você 
 * adicionou um atributo diretamente no protótipo pai de todos os objetos.
 *  
*/