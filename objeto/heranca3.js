const pai = { 
    nome: 'Pedro', 
    corCabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false, // Não será reescrito
        enumerable: true // Será apresentado no console
    }
})

console.log(filha2.nome)
filha2.nomw = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // Para saber se os atributos propriedades do objeto ou se vieram por herança.
        console.log(key) : console.log(`Por herança: ${key}`)
}

/**
 * Pessoal essa é a terceira aula de herança nessa Lula falar um pouquinho sobre uma função do objeto pouco

coerente a gente já viu na aula de criação criando objetos mostrou que não almeja ponto cliente e não

possui nenhum atributo passei nulo e eu vou mostrar pra vocês na sala na liderança 3 um pouquinho sobre

ele.

Vou fazer também nessa aula o fórum pra gente percorri atributos de um objeto.

A gente vai ver como a herança pode impactar na hora de percorrer os atributos de um objeto.

Então pra isso eu vou criar um novo arquivo chamado herança.

3 ponto.

Nós vamos começar usando o objeto.

Ponto.

Primeiro eu vou criar um laço pai que eu vou chamar aqui constante pai recebe nome Pedro vírgula com

o cabelo preto.

E agora eu vou criar um objeto o filho a partir do objeto que eu vou colocar aqui constante filha recebe

objetos do cliente vou passar no lugar de passar um duelo como um passeio naquele exemplo vou passar

o pai como primeiro parâmetro e aí você vai ver a partir disso ele criou um objeto novo tendo como protótipo

o objeto o pai que eu passei então em vez de ele criar já para o objeto ponto Prototype automaticamente

ele já criou o objeto filha tem um protótipo o objeto pai.

Então nesse caso eu posso por exemplo alterar o nome da filha para Anna e posso mostrar por exemplo

no console o valor de filho ponto com o cabelo.

Será que ele vai imprimi meu cabelo preto porque como esse método o objeto define que o protótipo é

o objeto que você passou como parâmetro ele já consegue localizar o atributo a partir do protótipo que

ele define dentro da função óbvia desse ponto crítico.

Continuando eu vou definir aqui uma filha dois recebe o objeto ponto.

Primeiro vou passar o pai e o segundo parâmetro desse método vai ser um objeto que eu vou colocar todos

os atributos que eu quero adicionar no meu objeto o filho dois que vai ser criado.

Então tem um objeto pai.

Então por conta disso ele já vai estabelecer uma relação de protótipo a filha vai ter como protótipo

o pai e automaticamente ele já tem acesso ao atributo nome e cor do cabelo.

Mais eu já posso criar aqui outros atributos inclusive esse atributo vai ser numerado seu atributo vai

se aceitassem escrito ele vai ser afinal está congelado ou não é coisa do tipo.

Então pra fazer isso eu vou criar aqui no segundo parâmetro um objeto.

Vou começar definindo os meus parâmetros então colocar o nome dois pontos e vou definir os atributos

o valor dele não recebia vírgula.

Vai ser um valor que não vai aceitar ser mudado e então vai ser um valor final está congelado e ele

vai estar numerado como TRU.

Então ele vai permitir ser listado no momento que você for usar um objeto pouco quis ou coisas do gênero

ou percorria a partir do Fórum.

Também é uma possibilidade.

Então vou imprimir aqui no console e console ponto log filha 2 do nome.

A gente vai ver que o valor foi de fato acertado.

Vou tentar mudar o valor de fila 2 para a Carla e vou me no console votem pela indústria que vai ter

um filho.

2 O nome tem cabelo e filha.

2 com o cabelo.

Já quem estabeleceu uma relação com o pai ele vai usar o valor diretamente do pai né com o cabelo não

define o momento do filho mas pelo protótipo ele chegou na cor do cabelo.

Então eu vou mostrar que o console apontou logo objetos que os filhão executaram.

Você vai ver que o filho tem nome porque a gente colocou o nome aqui colocando um console pronto logo

que isso filha.

2.

Você percebe também que o filho de 2 tem nome e se você tivesse colocado no numerado e número falso.

Você veria que esse atributo não ia aparecer.

E como definir o valor de filho.

Outro ele mostrou se por algum motivo não tivesse colocado o valor na filha Ana ele não é meramente

um objeto que nenhum dos atributos mesmo que ela tenha recebido esses atributos por herança ele não

lista.

Por padrão mais que coisa diferente né.

Achar pra vocês aqui fora Leite filha.

2 Aqui nós vamos ter todos os atributos também prestam se a colocar o console logo que você vai ver

que ele vai mostrar o nome e cor do cabelo.

Mas eu posso fazer um teste que significam filha 2 ponto Reese própria.

Ou seja ela tem aquela propriedade pertence a ela.

E aí você vai passar o nome da chave e aí se pertence eu vou simplesmente botar console Fotolog.

O nome da propriedade se não vou colocar não tem ninguém por herança dois pontos e o nome da propriedade

então mostrando aqui você vê que o nome pertence ao próprio objeto rs ou no próprio retorna thru e ele

retorna a chave e nome por padrão que pertence ao objeto.

Porém quando o cabelo veio por herança então essa é a forma que você tem pra saber se um determinado

atributo que você está navegando ali no fórum ele pertence ao próprio objeto ou se ele veio por herança

se você não quiser pegar por exemplo os atributos que vieram por herança a partir dos protótipos de

protótipos.

Você simplesmente testa para apagar apenas os atributos no qual o próprio retorna.

E aí você tem um atributo do próprio objeto na sala nós vimos o objectivo do cliente.

Eu passo o objeto que eu quero que seja o protótipo do objeto que está sendo criado a partir desse método

ou objeto de ponto crítico.

Depois disso até um objeto normal que eu posso adicionar Chaves até atributos dinamicamente.

A única diferença é que em vez de apontar para um objeto de ponto Prototype ele aponta para o objeto

que você passou na criação do objeto.

Você pode também além de passar o próprio objeto.

Você pode definir os atributos aqui inclusive colocando no valor definido algumas propriedades do atributo

que você fez diretamente aqui no objeto do cliente e depois a gente mostrou um pouquinho sobre o que

é que aparece no que já tinham visto um pouco sobre isso.

E finalmente falei sobre o fora a possibilidade que você tem de verificação até na propriedade pertence

ou não ao objeto que você está percorrendo naquele momento.

No caso aqui sim responde a própria retorna a TRU quer dizer que o atributo pertence ao objeto sinal

certo ou falso quer dizer que você recebeu aquele atributo a partir da cadeia de protótipos ou seja

a parte que fizemos até agora três exemplos gera ansiedade já deu pra gente perceber várias características

e coisas interessantes sobre herança.

Ainda vamos fazer mais alguns outros exemplos para que a gente possa consolidar aquilo que a gente já

viu pra também aprender alguns outros detalhes envolvidos no mecanismo de herança em JavaScript que

espero na próxima aula.
 */