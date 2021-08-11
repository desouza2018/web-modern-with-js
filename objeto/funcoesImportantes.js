// AULA 102 - FUNÇÕES IMPORTANTES
// Vamos fazer alguns exemplos de funções interessantes
/**
 * LINKS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
 *        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *        https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}) 

/**
 * E aqui nós vamos fazer alguns exemplos de funções interessantes. 
 * Eu vou criar um objeto usando a NOTAÇÃO LITERAL que você já está bem familiarizado nesse ponto do curso. 
 * const pessoa = {
 *   nome: 'Rebeca',
 *   idade: 2,
 *   peso: 13
 * }  
 * Continuando, eu vou colocar um código que vai pegar todas as chaves - nome: 'Rebeca, idade: 2, peso: 13.
 * Veja o código:  console.log(Object.keys(pessoa)) - LINHA 16.
 *   
 * Eu falei que o objeto é uma coleção de chaves e valores. Ele é uma coleção dinâmica de chaves e valores.
 * Aqui você pega as chaves de um objeto. 
 * Você vai executar e você vai perceber, salvando aqui e executando, veremos o retorno:
 * [ 'nome', 'idade', 'peso' ] - Ele pegou todas as chaves do objeto pessoa que eu acabei de criar. 
 * Você também tem a opção de pegar os valores de um determinado objeto usando:
 * console.log(Object.values(pessoa)) - Executando veremos o retorno:
 * [ 'Rebeca', 2, 13 ]. 
 * 
 * Você também pode pegar uma lista, tanto das chaves como dos valores, que são os registros,
 * usando o código: console.log(Object.entries(pessoa))  
 * Ele vai te dar um array com todos os subarrays, que vai ter a chave e o valor. Então executando,
 * veremos o seguinte retorno:
 * [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
 *  
 * Você vai ter um array mais externo composto de um array que tem dois elementos:
 * o primeiro é o valor da chave e o segundo é o valor propriamente dito. 
 * 
 * Se você quiser você pode percorrer esse array usando um forEach ou qualquer outra função de percorrer um array. 
 * Vamos mostrar isso mais à frente mas só mostrando para você um exemplo:
 * Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
 * 
 * Então a partir desse forEach eu vou percorrer os elementos do array que foi gerado 
 * a partir de Object.entries(pessoa). 
 * Neste caso, cada elemento seria um array que tem duas posições. 
 * O primeiro seria a chave e depois o valor. 
 * Existem muitas formas de você fazer isso. Você pode percorrer o próprio array diretamente ou se 
 * você quiser usar um operador destruction você pode tirar esses dois elementos de dentro do array, mas eu vou 
 * simplesmente colocar aqui:
 * Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
 * 
 *  console.log e vou colocar um template string (`), o primeiro elemento 
 * de indice [0]: dois pontos: 
 * console.log(`${e[0]}:
 * o elemento de indice [1] que é a chave e o valor: console.log(`${e[0]}: ${e[1]}. 
 * Fechando o template string: console.log(`${e[0]}: ${e[1]}`).
 * Executando veremos o resultado:
 * nome: Rebeca
 * idade: 2
 * peso: 13
 * 
 * Léo, se eu quiser tirar logo o nome, chave e valor? Sim pode. Você pode tirar esse elemento (e)
 * Object.entries(pessoa).forEach(e => {
 *  console.log(`${e[0]}: ${e[1]}`)
 * })
 * colocar aqui um operador destruction[]: 
 * Object.entries(pessoa).forEach([] => {
 *   console.log(`${e[0]}: ${e[1]}`)
 * })
 * 
 * E aqui você pode ter, por exemplo, chave, valor:
 * Object.entries(pessoa).forEach([chave, valor] => {
 *   console.log(`${e[0]}: ${e[1]}`)
 * })
 * 
 * Aqui eu vou colocar entre parênteses pra ele entender que aqui você está usando um destruction:
 * Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${e[0]}: ${e[1]}`)
})
 * 
 * Pronto! Aqui eu já tenho o elemento chave e valor de cada um desses arrays, aqui externos
 * [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ],
 * que foram criados a partir do entries - Object.entries(pessoa).forEach([chave, valor]. 
 * 
 * Em vez de usar: e, indice zero[0], e, indice um[1] - (`${e[0]}: ${e[1]}`) , que é  
 * menos descritivo, você pode substituir isso aqui - (`${e[0]}: ${e[1]}`),  por chave e valor:
 * Object.entries(pessoa).forEach(([chave, valor]) => {
 *   console.log(`${chave}: ${valor}`)
 * })
 * 
 * Executando veremos o mesmo resultado que da forma anterior, porém de uma forma um pouco mais clara
 *  e usando um recurso que já aprendemos anteriormente que é o destruction. 
 * No caso aqui eu estou desestruturando os elementos de um array.
 * Agente viu que o entries retorna um array maior cujos elementos são arrays de duas posições:
 * [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ].
 *  Eu estou simplesmente pegando cada um dos elementos que vêm desse forEach e tirando de dentro 
 * dessa estrutura o elemento um e o elemento 2. Eu sei que o primeiro é a chave e o segundo é o valor.
 * Percorrendo aqui da forma que está aparecendo aqui no console. 
 * 
 * Continuado agente vai ver mais métodos de Object. 
 * Tem um método chamado Object.defineProperty().
 * Veja o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * 
 * O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, 
 * ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
 * Sintaxe 
 * Object.defineProperty(obj, prop, descriptor)
 * 
 * Quando você quer definir uma propriedade de um objeto, você pode definir dinamicamente.
 * Aqui agente usou a notação literal 
 * const pessoa = {
 *   nome: 'Rebeca',
 *   idade: 2,
 *   peso: 13
 * }
 * 
 * Entretanto, depois que eu crio o objeto, eu posso colocar pessoa.nomeDaPropriedade e atributo. 
 * Então por que é que eu iria querer chamar a função para definir uma propriedade? 
 * - Porque você pode definir algumas características de uma propriedade por exemplo:
 * - aquela propriedade pode ou não ser alterada? 
 * - aquela propriedade ficará ou não visível quando você fizer object.keys()?
 *  
 * Então esse tipo de atributo você pode colocar numa propriedade.
 * Então para definir a propriedade:
 * - primeiro vou definir o target(obj) Object.definyProperty(pessoa, ), ou seja, 
 * qual o objeto que eu quero incluir na propriedade. 
 * - Vou definir o nome da propriedade, no caso aqui, entre aspas 'data de nascimento'
 * Object.definyProperty(pessoa, 'dataNascimento'). 
 * Eu não posso colocar data de nascimento fora das aspas porque se não o javascript vai
 * tentar interpretar ele como um identificador - algo que já existe na linguagem. 
 * Você vai dizer o nome da propriedade(prop) que você quer criar:
 * Object.defineProperty(obj, prop, descriptor) - Object.defineProperty(pessoa, 'dataNascimento', descriptor).
 * 
 * Aqui vou passar um objeto que vai ter todas as características dessa propriedade. 
 * Por exemplo se ela é uma propriedade que vai estar passivo ou ser listada na Lista quando por exemplo,
 * eu fizer Objetct.keys() ou coisas do tipo.
 * Ele vai ser listado vai ser listado? 
 * Vai ser listado sim. enumerable:true* 
 */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // a propriedada 'dataNascimento' vai ser listada.
    writable: false, // A propriedade não poderá ser reescrita.
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'// retornará 01/01/2019 pois a propriedade não pode ser reescrita.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/*
 * Você coloca essa propriedade vai aceitá ser modificada?
 * Não, pois ela é uma propriedade que não permite ser alterada - writable: false.
 * Object.defineProperty(pessoa, 'dataNascimento') ( {
 *     enumerable: true,
 *     writable: false,
 * })
 * 
 * E aí você já pode atribuir nesse momento, o valor(value) que você quer dar para essa variável. 
 * 
 * Object.defineProperty(pessoa, 'dataNascimento') ( {
 *     enumerable: true,
 *     writable: false,
 *     value: '01/01/2019'
 * })
 * 
 * Então vou colocar aqui - pessoa.dataNascimento = '01/01/2017 - vou colocar uma data diferente do valor
 * pré-configurado(01/01/2019). 
 * Vou colocar pessoa.dataNascimento = 01/01/2017. Executando veremos que a dataNascmento 01/01/2019 se
 * manteve inalterada pois a prop 'dataNascimento' não pode ser reescrita(writable: false).
 * Ela ('dataNascimento') vai assumir o valor inicial que lhe foir atribuída.
 * Depois de receber o descriptor (writable: false), ela funciona mais ou menos como freeze que congelou
 * especificamente, essa variável ('dataNascimento') e não o objeto(pessoa) inteiro. 
 * Então nesse caso, o que vai ficar é '01/01/2019 que é a data original. 
 * Então se eu fizer aqui um Object.keys: 
 * console.log(Object.keys(pessoa))
 * 
 * Logo, executando veremos que ele listou a dataNascimento.
 * [ 'nome', 'idade', 'peso', 'dataNascimento' ]
 *  
 * Por quê. Porque eu disse que eram enumerável - enumerable: true.
 * o seu colocar aqui false - enumerable: false, e executar novamente esse código. 
 * Você vai perceber que a data de nascimento não será mais enumerada na lista de chaves
 * [ 'nome', 'idade', 'peso'].
 * Embora você consiga acessar ele normalmente 
 * nome: Rebeca
 * idade: 2
 * peso: 13
 * 01/01/2019.
 *  
 * Tanto é que ele imprimiu 01/01/2019, mas pelo fato de ter colocado o false, eu tento pagar as chaves do objeto 
 * ele não enumera.
 * Você tem a possibilidade de na hora de definir uma propriedade, definí-la de uma forma mais completa,
 * setando os parâmetros de uma propriedade para que você possa ter uma maior flexibilidade.
 * Claro que é bem mais código do que simplesmente adicionar 'dataNascimento' mas ter mais controle dessa forma. 
 * 
 * Outra função que foi adicionada na versão ES06 Ecmascrip06 de 2015 é a função:
 * Object.assign().
 * Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * 
 * Sintaxe
 * Object.assign(destino, ...origens).
 * Assign - atribuir.
 * 
 * Esta é uma funcionalidade que surgiu no ES6 em 2015. 
 * Então você faz o seguinte:
 * ?
 */

const dest = { a: 1} // você tem um objeto chamado de dest que recebe um atributo{ a: 1}.
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(dest)
console.log(obj)

Object.freeze(obj)
obj.c = 1234// c não será alterado pois o método Object.freeze(obj) congelou o valor.
console.log(obj)

/** 
 * O const obj = object.assint(dest, o1, o2) - este código fará com que seja adicionado, concatenado, 
 * dentro do primeiro parametro passado, que é o dest, os valores dos parametros passados depois do primeiro(dest),
 * que são (o1, o2). 
 * OBSERVAÇÃO 1: o valor do atributo do objeto const dest = { a: 1} será sobreescrito pelo valor do parametro
 * passado em const o2 = { c: 3, a: 4}. Logo  executando o console.log(dest) veremos o seguinte resultado:
 * { a: 4, b: 2, c: 3 } - No lugar de {a: 1}, foi sobreescrito o valor { a: 4}.
 * 
 * OBSERVAÇÃO 2: o objeto const obj recebeu todos os atributos provenientes do objeto dest, que foram 
 * adicionados a ele após o código const obj = Object.assing(dest, o1, o2). Este método Object.assign(dest, o1, o2) 
 * atribuiu ao objeto dest(primeiro parâmetro) todos os atributos dos objetos passados depois dele que são (o1, o2).
 * Também sobreescreveu sobre o primeiro valor do atributo de dest, que era { a: 1}, o valor de o2 que é { a: 4}.
 * Executando veremos o seguinte resultado _ console.log(obj):
 * 
 * { a: 4, b: 2, c: 3 }
 * 
 * Então em outras palavras ele pega todos os atributos desses objetos que você passou você pode passar 
 * quantos atributos com outros objetos você quiser. 
 * Nesse método, todos os objetos que você passar(o1, o2), ele vai jogando dentro de um objeto de destino(dest). 
 * No final, você vai ter um objeto que é a concatenação de todos os atributos que você passou a partir de todos
 *  esses objetos que você colocou aqui - const obj = Object.assign(dest, o1, o2). 
 * 
 * OBSERVAÇÃO 3: 
 * - se passou um valor para o atributo{a} de um objeto, por exemplo: const dest = { a: 1},
 * - Então se depois você passar um outro valor para um mesmo atributo{ a: 4} em outro objeto(const o2),
 *  por exempo: const o2 = { c: 3, a: 4}, O que acontecerá?
 * Acontecerá que o método Object.assign(), ao fazer a concatenação(atribuição), irá sobreescrever os últimos
 * valores{ a: 4} dos atributos sobre os primeiros{ a: 1}, no objeto de destino(dest).
 * Então executando o console.log(obj) veremos o seguinte resultado:
 * { a: 4, b: 2, c: 3 }
 *  
 */