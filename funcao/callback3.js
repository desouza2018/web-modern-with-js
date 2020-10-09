//Exemplo de callback no browser
//criando uma função que acessa os elementos através de uma tag, neste caso, a tag body.
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

//getElementsByTagName é uma função que acessa os elementos através de uma tag.
//('body') é o parâmetro passado para a função getElementsByTagName.
//getElementsByTagName é uma função que é um array, então para acessar esse 
//elemento precisamos acessar o primeitro indice do array, neste caso o [0].
//Associado ao elemento colocamos o onclck e atribuiremos ao onclick uma callback
//que será chamada sempre que o usuário clicar no body no corpo da pagina html.
//Então o onclick recebe uma função e esta função recebe, como parâmetro uma evento e
//Você não é obrigado a declarar o evento porque se você usar o evento, você declara mas
//se não usar você não delara.