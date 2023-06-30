var div_cajita= document.getElementById('cajita')
var es_presionada=false  
var offset=[0, 0]

div_cajita.addEventListener('mousedown', function(valor){
 es_presionada=true

 offset=[div_cajita.offsetLeft - valor.clientX, div_cajita.offsetTop - valor.clientY ]

/**console.log('X: $ {valor.clientX}')
console.log('Y: $ {valor.clientY}')
/***otra forma */
/**console.log('Div top:'+ div_cajita.offsetTop)
console.log('Div left:'+ div_cajita.offsetLeft)**/

 console.log(es_presionada)
}, true)

div_cajita.addEventListener('mouseup', function(valor){
   es_presionada=false
   
   console.log(es_presionada)
  }, true)

  div_cajita.addEventListener('mousemove', function(valor){
   valor.preventDefault()
   if(es_presionada){
      div_cajita.style.left=(valor.clientX + offset[0])+'px'
      div_cajita.style.top=(valor.clientY + offset[1])+'px'
   }

  }, true)

  
 