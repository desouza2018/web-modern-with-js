console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' //criando um objeto nome primeira forma
//obj1['nome'] = 'Bola2' //Segunda formar de criar atributo.
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //Recebe o atributo nome por parâmetro.
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
