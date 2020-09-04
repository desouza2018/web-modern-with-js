{
    {
        {
            {
                var sera = 'Será???'//Esta variável estara visivel fora deste bloco tambem
                console.log(sera)   
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
/*var só tem dois escopos possiveis: ou vc cria uma variavel global visivel em toda a apicação
*ou se cria uma var dentro do escopo de uma function(a variavel só será visível dentro da function).
*Devemos evitar var global, pois ela pode ser sobreescrita por alguem e assumir outro valor.
*/