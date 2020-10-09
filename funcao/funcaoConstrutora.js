function Carro(velocidadeMaxima = 200, delta = 5) {// delta= 5 para que o carro acelere de 5 em 5
    //atributo privado que pertence somente a função Carro
    let velocidadeAtual = 0//o let  e o const torna a função privada

    //método público
    this.acelerar = function () {// o this torna a função pública
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

/**
 * Se voce quiser criar um atributo privado você cria uma função ou com let ou com var ou com const se for uma constante
 * Mas de preferência ao let ao inves do var.
 * 
 * Se quiser criar algo público para ser acessado de fora da função construtora, use o this. O this vai ser responsável
 * por tornar algo visível fora desta função.
 * 
 */

 const uno = new Carro
 uno.acelerar()
 console.log(uno.getVelocidadeAtual())

 const ferrari = new Carro(350, 20)
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.getVelocidadeAtual())