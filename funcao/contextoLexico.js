const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

/**
 * Pessoal nós vamos agora falar não diretamente sobre Cluj que vai ser o tema da próxima aula vou falar

de um assunto que está muito fortemente ligado com esse tema certo que às vezes as pessoas não entendem

bem o que é Cluj mas é um conceito muito simples nada muito complicado mas é importante você ter uma

noção dessa ideia do contexto léxico ou contexto no qual as coisas foram declaradas dentro da linguagem.

Isso faz uma diferença não só com quem está trabalhando com o que eu já falei isso algumas vezes nesse

contexto mas também que você está trabalhando com funções de uma forma geral.

Já escrevi nessa aula vou mostrar isso para vocês para que vocês possam entender essa ideia e depois

a gente trabalhar o conceito de clube aproximá la.

Então vou criar um novo arquivo chamado contexto léxico.

Esse é um exemplo muito simples para a gente tem isso.

Eu vou declarar aqui uma variável chamada valor que recebe um determinado valor chamei de Global eu

vou declarar a função diretamente aqui no arquivo então com um texto léxico no qual essa função foi

declarada.

Foi dentro desse módulo do Museu da empresa arquivo com texto léxico.

JS Então diretamente não foi nem objeto não foi dentro de outra função foi diretamente dentro do arquivo.

Isso é muito importante para a gente considerar.

Então eu vou simplesmente logar o valor do console para outro blog.

O valor dessa variável o valor certo se eu executasse essa função e a gente esperaria que chamassem

de fato o valor global já que dentro da função não tem uma constante uma variável com esse mesmo nome.

Então vai procurar no escopo maior.

Ele iria imprimir normalmente o valor global nada do outro planeta.

Se eu fizer essa pequena mudança vou criar agora uma função chamada ESET dentro de que eu vou criar

uma constante chamada valor que eu chamei de local e aqui eu vou chamar a minha função que foi a função

que eu declarei na Linha 3.

E aí no final das contas eu vou chamar funções e beleza.

Então olhando para esse código você teria duas possibilidades se pudesse imaginar como seria executar

esse código seria duas possibilidades.

A primeira possibilidade eu chamasse Kieszek.

Ele vai declarar uma constante chamada falou e vai executar minha função.

Na hora que eu executar minha função a minha função é procurar uma variável ou constante com esse nome

valor para imprimir primeiro console.

Será que ele vai procurar no momento que vai executar e vai achar essa variável valor local.

Ele vai achar essa esse valor que é global porque se eu colocasse isso aqui dentro de minha função obviamente

ele ia mostrar global porque ele ia mostrar exatamente a cair valor que ele encontrou antes mesmo de

chegar no escopo mais abrangente.

Mas a pergunta é se eu tirar essa linha ele vai imprimi local porque nessa execução ele vai ver que

o local a variável mais próxima digamos assim da execução do método ou ele vai encontrar essa constante

e global por conta do contexto léxico no contexto no qual a função foi escrita.

A minha função era baixar no caso o valor global.

Então se vai executar aqui ele vai achar o valor global.

Por quê.

Porque quando uma função ela foi declarada dentro de JavaScript.

Ela não tem apenas o seu conteúdo interno.

O seu nome e os parâmetros que ela recebe é aquilo que ela retorna.

Ela também tem consciência no local que ela foi definida certo então a função ela carrega consigo.

Essa informação do contexto no qual ela foi declarada isso tem tudo a ver com o conceito de cloud que

eu vou focar na próxima aula.

Então contexto o léxico é muito importante para uma função.

Quando ela foi declarada ela carrega consigo embora você esteja chamando ela em outro local embora você

esteja passando essa função como parâmetro para a outra função e será executado bem longe do local onde

ela foi definida.

Ela carrega consigo esse contexto no qual ela foi escrita e o fato de ela carregar consigo esse contexto

é que permite várias coisas relacionadas a Cluj dentro de JavaScript.

Então pra começar introduziu esse conceito para vocês eu quis fazer esse exemplo bem simples você poderia

pensar já que ela está executando aqui dentro as funções e quem está procurando o valor então ela vai

achar esse valor aqui antes de achar o global mas na verdade não.

Por quê.

Porque a função ela carrega consigo e o local onde ela foi definido então ela vai procurar dentro do

escopo léxico olha lá onde ela foi definida.

Então enquanto não achar local vai procurar o mais abrangente não no local de execução da função mas

sim o local onde ela foi definida.

Isso é muito importante para você entender outros comportamentos da linguagem JavaScript no que diz

respeito à função e na próxima aula vai continuar falando ainda sobre essa ideia do contexto léxico

mais conceituado pra você.

O conceito muito importante de ecologia.
 */