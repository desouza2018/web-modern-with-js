const escola = "Cod3r"//Declarando uma constante com nome de escola e atribuindo um valor a ela de "Cod3r"

console.log(escola.charAt(4))//Será retorna o caracter que ocupa a 4 posição da String Cod3r que é o r
console.log(escola.charAt(5))//Retornará um valor vazio pois na String Cod3r não existe o 5 caracter, pois começa a contar a partir do zero
console.log(escola.charCodeAt(3))//Pegará o valor do caracter que ocupa a posição 3 e retornará o seu valor unicode na tabela ASCII
console.log(escola.indexOf('3'))//Retornará a posição do 3 ocupado na string Cod3r se o 3 estiver contido na string "Cod3r", que neste caso existe.

console.log(escola.substring(1))//Retornará um caracteres contidos no indice um ao final - od3r
console.log(escola.substring(0,3))//Retornará os caracters contidos na string a partir do indice 0 até o 3, porém sem incluir o indice 3 - Cod

console.log('Escola '.concat(escola).concat("!"))//Usando concatenação. 'Escola' é um literal(dado usado sem armazenar numa variável)

console.log(escola.replace(3, 'e'))//Este código substituirá o caracter do terceiro indice pelo caracter e
console.log(escola.replace(/\d/, 'e'))//Este código contem uma expressão regular(/\d , 'e') que substituirá os digitos pelo caracter e(resultado: Coder)
console.log(escola.replace(/\w/g, 'e'))//Substitui todos os digitos e caracteres pela letra e(Cod3r ficará assim: eeeee)

/*O código abaixo transformará em Array 
*a String a partir da virgula.
*split(',') - parametro passado na função split
* para criar o array de strings a partir da virgula
*/
console.log('Ana, Maria, Pedro'.split(','))
