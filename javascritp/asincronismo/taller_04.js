const saludar=(nombre)=>{
return new Promise((resolve, reject) =>{
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        resolve(nombre)
    }, 1000)
    })
}

const hablar=(nombre)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log('blah,blah, blah.......')
            resolve(nombre)
        }, 1000)
        })
    }
    
    const adios=(nombre)=>{
        return new Promise((resolve, reject) =>{
            setTimeout(function() {
                console.log('Terminando conversacion')
                resolve(nombre)
            }, 1000)
            })
        }


console.log('Iniciando conversacion...')
saludar('Melanie')
.then((dato) => hablar(dato))
.then((dato) => adios(dato))