/**
 * Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 * Veja o link:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures
 * https://www.w3schools.com/js/js_function_closures.asp
 * Closure é o escopo criado quando uma função é declarada.
 * Esse escopo permite a função acessar e manipular variáveis externas à função.
 */

//Contexto léxico em ação!

const x = 'Global'

function fora() {//criando a função fora
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

/**
 * Penso agora vamos falar sobre Closure que é um conceito bastante interessante e importante dentro da linguagem
 * JavaScript.
 * Closure(fechamento) é o escopo criado quando você define a sua função.Quando a função é declarado é criado um escopo em volta, 
 * digamos assim, onde a função foi declarada e, tem tudo a ver com o contexto léxico que eu falei na aula passada.
 * Esse escopo vai permitir que você acesse as variáveis que foram declaradas e externas à função.
 * Então o Closure é um escopo criado quando a função é declarada, então a função declarada e o escopo que está em volta.
 * Por isso o nome Closure ou fechamento, algo que envolve alguma coisa.Por isso tem esse nome,
 * então esse escopo que envolve a declaração da função é o que chamamos de Closure.
 * Então esse escopo permite a função acessar e manipular as variáveis externas à função e essas variáveis externas que foram 
 * declaradas à função.
 * Tem tudo a ver com o contexto léxico, contexto no qual a função foi declarada, dentro, fisicamente no seu código.
 * Então vou mostrar para vocês agora um exemplo pra trabalhar esse conceito que é muito importante, que é nada mais do que o 
 * contexto léxico em ação. 
 * Vou criar um constante x chamada Global, mais ou menos parecido com o exemplo passado. 
 * Vou criar uma função chamada função fora e aí vou declarar dentro dessa função uma constante const x local que recebe uma string local,
 * e vou criar uma função dentro, que está definida dentro dessa função fora, ou seja, o contexto da palavra no qual essa função foi 
 * declarada, foi dentro dessa função fora.
 * Aqui eu vou tentar acessar o valor de x.
 * Aqui eu tenho dois x. Um X que foi definido dentro da função fora, o X que foi definido de forma global, aqui dentro do arquivo.
 * Não global do ponto de vista do node, porquê essa constante está visível apenas dentro desse modulo, mais global aqui dentro do nosso exemplo.
 * Vou colocar aqui um return e essa função fora vai retornar essa função dentro. Poderia tanto ter retornado direto como posso declarar a função e 
 * depois retornar a partir do nome da função, mas tanto faz. Eu poderia ter criado uma função anônima e retornado que o resultado seria exatamente o mesmo.
 * Fora dessa função fora, dentro do arquivo, eu vou criar uma constante chamada minhaFunção e vou chamar a função fora. O que é a função fora retorna?
 * Ela retorna uma função. Então vou chamar a função fora e o retorno dessa função vai ser uma função que armazenei nessa variável
 * minha função e agora eu vou chamar a função minhaFuncao para ver exatamente o que é que ela retorna. 
 * Qual o valor de x ela retorna? O valor de x que ela retorna será que é o valor global? Porque estou chmamando a função aqui diretamente 
 * dentro do arquivo. Então se ele procura X ,ele vai achar o X global ou ele vai achar o X que está aqui dentro da função fora?
 * Eu acho que você já deve saber a resposta porque na aula passada, eu falei que o local físico no qual a função foi declarada 
 * é muito importante. Nesse caso, o local físico que é a função dentro, que foi retornado a partir dessa função fora foi declarado,
 * foi declarado aqui dentro dessa função. E aqui dentro tinha uma variável X com o valor local.
 * Então como o Closure, uma função em javascript é um Closure, Por quê?
 * Porque ele tem memória do local onde ela foi definida e esse escopo que está externo à função, também vai junto quando você acessa 
 * uma função. Esse Closure, esse fechamento, digamos assim, esse escopo que abrange, que envolve a função, também vai junto quando 
 * você chama a função.
 * Então essa memória a função tem, ou seja, a função ela lembra das suas origens. Ela tem essa memória do local de onde ela veio.
 * Então isso significa que por conta de uma função em JavaScript ser um closure, ele vai ter ciência do local onde ela foi definida.
 * Então ele vai acessar a variável x e não a variável global. 
 * Então esse é um conceito bastante simples mas é um conceito importante no JavaScript. 
 * Porque quando você acessa a função, praticamente você poderia pensar: - Ah não, só tenho acesso a passar parâmetros, só tenho acesso 
 * a receber um retorno, não tenho mais nada a não ser a própria função! 
 * Na verdade além da função você tem acesso ao escopo que é criado quando a função é declarada, no local no qual a função é declarada.
 * Por isso a função tem essa memória e isso é muito importante dentro do JavaScript.
 * Então é um conceito que para algumas pessoas é um pouco confuso.
 * Ao ouvir a palavra closure, a pessoa pensa: -  não sei o que é e tal! Mas é muito simples. O closure é esse escopo que envolve a função.
 * Então quando você acessa a função e executa a função em outro contexto, totalmente diferente, ela tem memória do local das suas origens.
 * É por isso que esse tipo de comportamento acontece.
 * Por isso ele não vai ler o X global mas ele vai ler a variável local porque ele carrega consigo esse escopo mais externo à função.
 */