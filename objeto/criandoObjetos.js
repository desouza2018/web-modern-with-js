//Link: https://www.javascripttutorial.net/javascript-factory-functions/#:~:text=Introduction%20to%20the%20factory%20functions%20in%20JavaScript%20A,%27%20%2B%20this.lastName%3B%20%7D%20%7D%3B%20console.log%20%28john.getFullName%20%28%29%29%3B
//link: https://www.w3schools.com/js/js_objects.asp

// Estratégias de criação de Objetos

// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome//this torna esta variãvel pública.
}

/** This torna essa variável pública, ou seja, essa variável 
 * não está encapsulada dentro do objeto, não está escondida,
 * ou seja, ela está visível para fora do objeto. 
 * Então como agente trabalha com esse conceito de encapsulamento do JavaScript você tem que entender 
 * os níveis de visibilidade das coisas. 
 * Você só tem JavaScript no nível global quando trabalha no nível do Browser.
 * Quando trabalha no nodejs, tem outros níveis:
 *  tem um nível global, tem um nível do próprio módulo que representa o arquivo e tem o 
 * nível da função.
 * Quando você trabalha no Browser e também no node, à partir das palavras let e const, 
 * você também tem um nível de visibilidade apenas no bloco.
 * Antigamente no Browser você só tinha o escopo global que é o Window e 
 * Você tinha o escopo da função. Agora no Browser você tem o escopo global que é o Windows.
 * Você tem o escopo da função e você tem um escopo de bloco a partir de variáveis definidas com let 
 * e com const. 
 * Quando você pensa em encapsulamento, você pensa em tentar diminuir o máximo possível, o nível de visibilidade 
 * de uma determinada variável.
 * Então nesse caso, preço e desconto vão ficar encapsulados, ou seja, não vou exibir para fora.
 * E no caso do this.nome, ele vai ficar visível para fora do objeto de tal forma que, quem quiser
 * alterar o valor do nome pode alterar externo a função produto porque ele está visível.
 * Quando eu coloco "this." significa que este atributo vai ser público.
 * Quando eu crio um atributo interno dentro da função, significa que ele vai ser privado.
 * Você só tem dois níveis de visibilidade: pública ou privado.
 * 
*/