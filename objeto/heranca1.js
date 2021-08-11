// AULA 103
// LINK: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS
// LINK: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
//LINK: https://www.w3schools.com/js/js_object_prototypes.asp

/** 
 * Herança protótipo
 * Todos os objetos JavaScript herdam propriedades e métodos de um protótipo:
 * - Date objetos herdam de Date.prototype;
 * - Array objetos herdam de Array.prototype; 
 * - Person objetos herdam de Person.prototype.
 * O Object(objeto) está no topo da cadeia de herança de protótipos:Object.prototype.
 * Date objetos, objetos e objetos herdam de Array Person Object.prototype.
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

/**
 * A gente sabe que a herança é  um princípio da OOP(programação oritentada a objetos) que faz com que 
 * você receba do seu pai atributos e comportamentos e você reusa o código. 
 * E você não precisará fazer um control C, control V e copiar tudo aquilo que está num determinado objeto
 * e colar em outro para você ter aquele código disponível no segundo objeto.
 * O objetivo da herança é exatamente criar mecanismos para que, esse reuso de código, você não precise
 * usar o control C control v.
 * Já falei pra vocês que se você tiver que escolher entre herança e composição,  priorize a composição, pois 
 * ela é mais flexível.
 * Na Herança você só tem um ancestral e, em JavaScript, você tem uma pessoa que pode servir de classe Pai.
 * Já na composição, um objeto pode ter múltiplos objetos, ou seja, é composto por vários objetos que dão
 * uma flexibilidade maior.
 * Você tem padrões de projeto que favorecem a composição. Por exemplo, você pode usar no lugar de uma herança
 * um decorator. Você usa esse padrão de projeto e ele te ajuda a tirar a necessidade de ter uma herança,
 * por exemplo, baseado em composição.
 * É muito importante você entender a herança em JavaScript. Ela é muito útil e ela está presente dentro do 
 * paradigma de orientação objeto dentro do JavaScript, porém ela usa uma herança um pouco diferente do que
 * você está acostumado.
 * Por exemplo, em Java e outras linguagens ela é uma herança baseada em protótipos.
 *  Na verdade o que é que seria isso?
 * Por exemplo:
 * - quando você define uma variável dentro de uma função - você tem uma função que tem uma variável chamada X
 * e fora dessa função, você também tem uma variável chamada x. Então fora da função tem uma variável chamada x 
 * e dentro da função tem uma variável chamada X. 
 * Quando você tentar acessar essa variável dentro da função, obviamente ele vai tentar pegar o valor que está 
 * mais próximo de onde você tentou pegar, que é dentro da função. 
 * Então ele vai enxergar qual a variável? O X que está dentro da função ou o X que está fora da função?
 * Ele vai tentar pegar o X que está dentro da função.
 * Se a variável X dentro da função não existir, aí ele passa a procurar dentro da função e vê que não tem a 
 * variável x, então ele procura no escopo mais abrangente e ache o X que foi definido fora da função.
 * Por que estou explicando isso? Porque essa é mais ou menos a ideia do protótipo.
 * Você tem um objeto que tem uma atributo nome e aí você tenta acessar o atributo do nome e ele vai pegar
 * o atributo do próprio objeto. 
 * Se você está tentando acessar um atributo chamado corDoCabelo e esse objeto que você está tentando
 * procurar não tem corDoCabelo - o objeto tem uma referência por seu pai que é exatamente esse conceito
 * do protótipo.
 * Você tem uma referência para um objeto que seria o seu protótipo e, se você não achou a propriedade 
 * no objeto, ele vai procurar:
 * Esse objeto tem um protótipo? Tem. 
 * Então procura esse mesmo atributo no meu protótipo que é o pai dele. 
 * Ele vai procurar. Achou a propriedade aqui? Não, não achei. 
 * Procure no protótipo do meu pai, que seria o do meu avô.
 * Ele vai caminhando nessa hierarquia de objetos até achar a propriedade. 
 * Então se ele percorreu toda a hierarquia de protótipos e todos os objetos à partir do meu objeto,
 * procurando a referência do meu objeto pai, que seria meu protótipo, procurando o pai do meu pai e,
 * vai procurando e se ele não achar esse objeto, ele vai dizer:
 * - esse atributo é Undefined(definido). 
 * Se ele achar alguns dos elementos, algum dos objetos, em toda a hierarquia de protótipos,
 *  ele devolve o valor. Assim eu consigo reaproveitar e usar os atributos e comportamentos que 
 * estão em objetos referenciados a partir de um atributo que representa o meu protótipo.
 * Se eu achar para vocês aqui por exemplo um diagrama bem simples deixa eu colocar aqui no modo de apresentação.
 * Pronto você tem por exemplo aqui um objeto Ferrari(const ferrari) e Ferrari tem um atributo modelo: S40,
 * e tem uma velocidade máxima(atributo) velMax: 334 km/h. 
 * Ferrari tem uma propriedade. Eu coloquei entre colchetes porque é assim que está na documentação, 
 * na especificação do JavaScript.
 * Mais eu vou já dizer o nome do atributo que é padronizado usada na versão JS 2015 com o melhor tributo
 * pra você se acessar a sua o seu objeto o pai que seria o seu protótipo.
 * Ele por padrão aponta para um cara chamado Object.Prototype não preciso falar nada.
 * Sempre que eu crio new Object eu instancio a partir da função Object, ele cria um objeto automaticamente,
 * ele tem uma referência para esse Object.Prototype.
 * Então voce pode perguntar:
 * Professor, eu posso mudar, ter uma referência, por exemplo de carro?
 * Você pode perguntar:
 * Professor, é sempre fixo? Sempre tenho que apontar para Objeto.Prototype?
 * A reposta é não. 
 * Você pode mudar o protótipo de um objeto. Eu posso, por exemplo, criar um objeto chamado carro e fazer
 * o objeto Ferrari apontar para o objeto o carro. 
 * Eu vou criar um objeto seguindo mais ou menos esse diagrama(prototype_herança1.png) e a gente vai dar
 * uma olhada no que significa esse Prototype.
 * Você vai perceber que esse colchetes, entre dois colchetes no Prototype.
 * Isso aqui é um conceito de protótipo.
 * Outra coisa é o atributo Object.Prototype. Eu tenho um atributo chamado Prototype que não está
 * disponível em Ferrari, que é um objeto; não está disponível em o Volvo que é um objeto, mas está disponível
 * em Object que é uma função.
 * Então um atributo Prototype só está disponível dentro de uma função.
 * Então vou começando a jogar alguns conceitos para vocês aqui. 
 * Agente vai montando esse quebra cabeça de como funciona herança em Javascript. 
 * Mas isso aqui, esse entre colchetes duas vezes Prototype é o conceito de protótipo e eu vou mostrar
 * pra vocês o nome da propriedade que está disponível em todo objeto que representa esse Prototype,
 * mas que é diferente, e eu coloquei até um desenho que o Prototype entre colchetes que é o conceito de protótipo,
 * não é a mesma coisa da propriedade prototype que existe dentro das funções. 
 * Pra gente começar eu vou criar um novo arquivo chamado herança1.js.
 * Vamos fazer alguns testes.
 * Primeiro eu vou definir uma constante chamada Ferrari const ferrari.
 * Seguindo mais ou menos a mesma lógica do que está escrito lá naquele diagrama, vou colocar aqui
 * o modelo: S40. Velocidade máxima 324.
 * Vou criar um outro objeto chamado Volvo (const volvo).
 * O modelo: V40 e a velocidade máxima velMax: 200 km/h. 
 * Então criei um objeto da mesma forma quem agente já fez até então usando a notação literal do objeto.
 * Então a forma que eu criei aqui não mudei nada. Não mexi em nada especificamente de herança não alterei nada.
 * Por padrão, sempre que eu crio um objeto com a notação literal do objeto usei a nomenclatura quem já
 * está acostumado.
 * Vamos fazer alguns testes para a gente começar a tirar algumas conclusões em cima disso.
 * Quando eu uso console.log(ferrari.__proto__), que tem dois underline, esse atributo estranho.
 * A partir disso(ferrari.__proto__) eu consigo acessar quem é o protótipo desse objeto.
 * Quem seria o meu Super objeto, o objeto pai. 
 * Então significa que se eu tentar acessar algum atributo de Ferrari e eu não encontrar dentro de Ferrari, 
 * ele vai procurar esse mesmo atributo dentro do meu protótipo que seria o meu objeto pai; 
 * procurou lá achou ele retorna o valor que ele viu do pai.
 * Se ele não achou, ele vai procurarando no protótipo do protótipo do protótipo.
 * Vai procurar em toda a cadeia de protótipos - isso é um conceito muito importante.
 * E aí se ele achar em um dos elementos da cadeia de protótipos ele retorna;
 * e se ele não achar ele retorna que é undefinded.
 * Então, para agente começa a tirar algumas conclusões importantes, eu vou executar esse código aqui:
 * console.log(ferrari.__proto__)
 * e ele mostrou que o protótipo de Ferrari é um objeto vazio
 * Object: null prototype] {}
 *  mas existe e está presente.
 * Vamos fazer aqui um segundo teste e vou colocar:
 * 
 * console.log(ferrari.__proto__ === Object.prototype)
 * 
 * ferrari.__proto__  é igual igual igual, estritamente igual ao Objeto.Prototype?
 * Que foi o que eu mencionei aqui nesse exemplo(prototype_herança1.png).
 * Eu falei que um objeto criado por padrão aponta para Object.Prototype.
 * Vou executar o codigo:
 * 
 * console.log(ferrari.__proto__ === Object.prototype)
 * 
 * Logo ele vai dizer que é verdadeiro(true).
 * De fato esse atributo que referência ao protótipo de Ferrari, que não era um atributo 
 * padronizado especificado para a linguagem era suportado por muitos Browsers, mas não 
 * era documentado, não estava na especificação, mas agora sim está e você pode usá-lo,
 * de uma forma tranquila, que está disponível tanto no nodejs, como é o caso 
 * que estou falando aqui, como no Browser também ,Você pode usar esse mesmo atributo.
 * Então ele representa o objeto.Prototype que seria o protótype de mais alto nível.
 * Depois dele não tem mais nada.
 * Fazendo outro teste, eu vou colocar aqui:
 * 
 * console.log(volvo.__proto__ === Object.prototype)
 * 
 * (volvo.__proto__ === Object.prototype) é estritamente igual ao Object.prototype?
 * Então, nós temos o resultado: 
 * true
 * Tanto o protótype padrão de um objeto criado Ferrari, Volvo ou qualquer outro objeto que você
 * crie com a notação literal de objetos ou mesmo com o new Object, Você vai apontar para o Object.prototype.
 * OBSERVAÇÃO: isso não vai acontecer se você estiver criando com sua função construtora
 * e já vou falar um pouco sobre isso em outra aula. 
 * Outro teste que fica claro é que tanto o prototype de Ferrari e de Volvo, Se você fizer igualdade estrita,
 * você vai ver que eles são iguais porque apontam para o mesmo Object.prototype. 
 * Continuando aqui:
 * 
 * cosole.log(Object.prototype.__proto__)
 * 
 * Será que o Object.prototype tem um protótipo depois dele, que seria o protótipo de mais alto nível
 * na hierarquia? Será que ele tem?
 * A resposta é não, ele não tem. 
 * Ele tem um protótipo nulo null. Chegou nele como mostrei aqui, 
 * O protótipo do Object.prototype(prototype_herança1.png) que é o __proto__, aponta para nulo.
 * Então sempre que falamos de protótipo de objeto,  a forma que você acessa o atributo 
 * dentro do objeto é:
 *  __proto__.
 *  
 * Concordo com você que __proto__ é um nome trabalhoso. A idéia de colocar esse nome estranho
 * é para que não haja conflito com seus próprios atributos. 
 * Então você pode, por exemplo, atribuir um valor nulo se você não quiser nem um protótipo daquele objeto,
 * mas o fato é que por padrão ele aponta para o Object.prototype. 
 * Já falei várias vezes que Object é uma função e por ser uma função, toda função tem esse 
 * atributo prototype.
 *  
 * Então pra gente terminar eu vou criar uma função chamada MeuObjeto eu vou fazer alguns testes.
 * Então primeiro:
 * 
 * function MeuObjeto () {}
 * console.log(typeof Object, typeof MeuObjeto)
 * console.log(Object.prototype, MeuObjeto.prototype)
 * 
 *  typeoff  Object é do tipo function como a gente já sabe.
 * O tipo typeoff do MeuObjeto também é do tipo function.

Então se toda a função tem Prototype tanto óbvia tem Prototype como meu objeto também tem Prototype

então coloca aquele objeto de ponto para o touchpad.

A gente já viu aqui um objeto vazio e meu objeto ponto Prototype.

Só que note que eles são objetos diferentes.

Isso aqui é um objeto que foi criado a partir do momento que você definiu essa função e depois vai entrar

um pouco mais em detalhe sobre o atributo protótipo das funções no time da sala.

No primeiro momento foi que a gente entendeu aqui que um objeto em JavaScript.

Ele tem uma referência para o seu protótipo e essa é a forma como o JavaScript define herança a partir

da referência para um protótipo você tem uma aparência para um outro objeto e esse objeto tem atributos

e comportamentos que podem ser acessados a partir do objeto filho você pode colocar um atributo que

não existe no filho e ele vai procurar um Protoss que o pai não acha que o pai irá procurar no pai do

pai vai percorrendo a cadeia de protótipos até encontrar aquele determinado atributo essa é uma forma

de você ter o uso de você não ter que replicar os mesmos atributos e as mesmas funções em todos os objetos.

Ele vai procurando uma cadeia de protótipos até achar a forma como você tem de dentro do objeto acessar

o protótipo dele a partir do atributo dela.

Pronto eu falei pra vocês que o protótipo está presente apenas dentro de funções Ferrari é um objeto.

Então se eu fizer por exemplo para a gente testar aqui e aplicar isso aqui e colocar aqui Prototype.

Então será que vai vir alguma coisa a partir desse objeto o ponto Prototype não porque o objeto não

tem esse atributo Prototype ele tem apenas o atributo dela.

Pronto.

Então a gente já viu várias coisas interessantes aqui vamos começar a montar o quebra cabeça de herança

a partir de vários exemplos na próxima hora a gente continua falando sobre esse tema.
 * 
 */