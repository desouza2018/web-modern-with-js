//Função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)// Retornará um NaN - NOT A NUMBER
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//Retornará apenas a soma dos dois primeiros dados.
imprimirSoma()

//Funão com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))//Chamando a função soma
console.log(soma(2))//Retornara 2
console.log(soma())//Retornar NaN not a Number
