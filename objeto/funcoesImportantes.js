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
 * Tem um método chamado Objetivo define Properties você quer definir uma propriedade de um objeto você 
 * pode definir dinamicamente como a gente está colocando aqui a gente usa a notação literal mas depois 
 * que eu crio o objeto eu posso colocar a pessoa ponto ou não na propriedade atribuir. 
 * Então por que é que eu iria querer chamar a função para definir uma propriedade. 
 * Porque você pode definir algumas características de uma propriedade por exemplo aquela propriedade pode 
 * ou não ser alterada. 
 * Aquela propriedade ficará ou não visível quando você fizer de ponto 15 por exemplo. 
 * Então esse tipo de atributo você pode colocar numa propriedade então para definir a propriedade o primeiro 
 * definiu Taguatinga e qual o objeto que eu quero incluir na propriedade. 
 * Vou definir o nome da propriedade no caso aqui entre aspas data de nascimento. 
 * Eu não posso colocar data de nascimento fora das aspas porque se não vai tentar interpretar ele como 
 * um identificador ou algo que já existe na linguagem. 
 * Você vai dizer no nome da propriedade que você quer criar e vou passar um objeto que vai ter todas as 
 * características dessa propriedade. 
 * Por exemplo se ele é um propriedade que vai estar passivo ou se listada na Lista do não fizer por exemplo 
 * um objeto que ponto X ou coisas do tipo ele vai ser listado vai ser listado sim. 
 * Você coloca essa propriedade que vai aceitá lo ser modificada não não é uma propriedade que permite ser alterada. 
 * E aí você já pode atribuir nesse momento o valor que você quer dar para essa variável. 
 * Então eu acho que essa é toda minha pessoa data de nascimento vou colocar outra data diferente coloquei 
 * o ano de 2019 aqui tem a ver com o local onde 2 mil e 17 já que eu disse que essa é a propriedade que 
 * não aceita valor e não aceita ser sobre a escrita. 
 * Não aceita essa escrita Melhor dizendo ele vai assumir o valor inicial que ela atribui aqui no próprio 
 * site e depois disso ele funciona mais ou menos como fiz nele que ele congelou especificamente essa variável 
 * e não um objeto inteiro. 
 * Então nesse caso o que vai ficar 2019 é que a data original. 
 * Então se eu fizer aqui um objeto desse ponto quis logo o objeto que isso pessoa executando você vai 
 * ver que ele listou data de nascimento. 
 * Por quê. Porque eu disse que eram enumerável o seu colocar aqui falso e executar novamente esse código. 
 * Você vai perceber que a data de nascimento não será mais numerada na lista de chaves embora você consiga 
 * acessar ele normalmente. 
 * Tanto é que ele imprimiu de 2019 mas pelo fato de ter colocado o falso eu tento pagar as chaves do objeto. 
 * Ele não enumera mas você pode colocar o numeral normalmente então você tem a possibilidade de definir 
 * uma propriedade define ela de uma forma mais completa aceitando os parâmetros de uma propriedade para 
 * que você possa ter uma maior flexibilidade claro que é bem mais código do que simplesmente adicionar 
 * data de nascimento mais sistema e mais controle dessa forma. 
 * Outra função que foi adicionada na versão do clipe de 2015 é a função objeto de ponto. 
 * Assim só para deixar claro aqui é uma funcionalidade que surgiu no S6 em 2015. 
 * Então você faz o seguinte você tem um objeto por exemplo chamado de teste. 
 * Já dizia porque tem esse nome você tem um objeto ou outro atributo você tem um objeto 2 que tem um atributo 
 * também diferente mais tem um atributo igual a esse objeto e estilo. 
 * E aí você pode criar aqui por exemplo um objeto resultante que recebe o objeto de pontuação. 
 * Você tem um objeto de destino e outros objetos que vão receber dados. 
 * Então na verdade o que ele faz ele pega esse objeto e China que é o objeto que vai receber os atributos 
 * de todos os objetos que você passar como parâmetro. 
 * Depois da primeira ele vai pegar esses atributos e vai colocar vai concatenar um objeto que você passou 
 * no primeiro parâmetro. 
 * Então no primeiro caso você tem um atributo a que tem o valor e o objeto tem o B que tem valor 2 então 
 * ele é colocado dentro do objeto insistir no atributo B com um valor 2 e aí o objeto 2 vai receber e 
 * vai colocar dentro do objeto Chino. 
 * O atributo C e depois um atributo só que o app já existia então o valor será sobrescrito o último valor
 * que você colocou no caso o valor do objeto. 
 * 2 Então em outras palavras ele pega todos os atributos desses objetos que você passou você pode passar 
 * quantos atributos com outros objetos você quiser. 
 * Nesse método então todos os objetos que você passar ele vai jogando dentro de um objeto de destino. 
 * Os atributos então no final você vai ter um objeto que a concatenação de todos os atributos que você 
 * passou a partir de todos esses objetos que você colocou aqui. 
 * Chamado de Object ponto o é tão lembrado que sempre vai ficar sobrescrito e o último ele vai criar o objeto. 
 * Coloque um parâmetro no outro objeto que ele vai concatenar nesses objetos tem um atributo que já está 
 * aqui o valor vai ser no sobrescrito e o último valor que vai ficar do último objeto que ele tem. 
 * No caso aqui o valor será do objeto 2 e não o valor do objeto deixe de ser o primeiro que eu coloquei aqui. 
 * Então o objeto gera é justamente a concatenação de todos os elementos. 
 * Como já mencionei anteriormente nós já vimos no exemplo passado mas só pra mostrar de novo aqui o objeto foi isso. 
 * Então nesse caso eu posso fazer. 
 * BJ ponto pontos recebe um dois três quatro. 
 * Ele não vai alterar esse valor e imprimir no valor de objeto. 
 * Finalmente você vai ver que esse objeto é a soma concatenação de todos esses atributos. 
 * Quando eu tentei mudar aqui não deu certo porque eu fiz o que já viu no exemplo anterior então nós temos 
 * aqui a quatro B 2 C 3 note que o Alfa o primeiro atributo adicionado aqui no primeiro da lista. 
 * Só que nesse momento aqui no objeto 2 eu sobre escrevi o valor. 
 * Como já mencionei anteriormente espero ter ficado claro. 
 * Esse é um exemplo de algumas funções importantes. 
 * A gente viu foi isso. Nós vimos o que quis. 
 * Nós vimos o site que é uma função nova e com isso queremos 2015 e vimos um desfile próprio e vimos formas 
 * de obter os dados nem fazer um introspecção no objeto que é chamado de reflexo. 
 * Você consegue ler o conteúdo do objeto listar suas propriedades e seus valores a partir disso você conseguir 
 * gerar dinamicamente por exemplo o SQL ou gerar um isqueiro para inserir um dado no banco de dados um certo. 
 * Você pode ler o conteúdo do objeto montar o seu SQL dinamicamente a partir do nome da chave os valores 
 * e tal e no final um dado no banco de dados é possível fazer isso e é muito fácil você leu os valores 
 * de um objeto em JavaScript. 
 * Nessa hora a gente viu três formas e ler suas chaves leu os valores e as entradas a chave e o valor 
 * inclusive fazendo uma desestruturação aqui para pagar o valor da chave e do valor você pode definir 
 * a propriedade de uma forma mais homogênea. 
 * Saulo felizmente já tinha visto assim uma forma de você concatenar vários objetos em um só lembrando 
 * que os últimos elementos vão sobre escrevê lo se tiver propriedades com o mesmo nome então espero na 
 * próxima aula para gente começar a ver o mundo da herança em JavaScript. 
 * E como funcionará assim vai fazer vários e vários exemplos para que gente possa ter esse conceito muito 
 * bem explicado. 
 * Para que não restem dúvidas pra você está muito esperto aproximá la.
 */