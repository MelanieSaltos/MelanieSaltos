function cargar_elemento(){
   var container= document.getElementById('container')
   var h1= document.createElement('h1')
   var texto= document.createTextNode('Melanie Saltos')
   h1.appendChild(texto)
   container.appendChild(h1)

}