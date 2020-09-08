let a = 3

global.a = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports ===this)
console.log(module.exports)

//criando uma variável maluca sem var e let
abc = 3 // não faça isso!!!
console.log(global.abc)

// module.exports = {e: 456, f: false, g: 'teste' }

/* é necessário conhecer o runtime - o local em que se esta
executando o JS. É nececassirio conhecer o sistema de modulos(module) no nodejs se 
quiser programar o JS no backend. 
Veja o link: https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-pt
 */
