function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
    }, 1000)
}

function hablar(nombre, fn) {
    setTimeout(function(){
        
    }, 1000)
}

console.log('Iniciando conversacion...')
saludar('Guillermo', hablar)
console.log('Terminando conversacion...')