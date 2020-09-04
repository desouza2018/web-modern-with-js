let numero = 1
{
    let numero = 2//O let assume valor apenas dentro do bloco mesmo sem uma função
    console.log('dentro =', numero)
}
console.log('fora =', numero)
/*Variáveis definidas com a palavra reservada var tem escopo global e tem escopo de função.
*Variáveis definidas com a palavra reservada let tem escopo global, escopo de função e de escopo
de bloco.
 */