var div_cajita= document.getElementById('cajita')
var es_presionada=false  

div_cajita.addEventListener('mousedown', function(valor){
 es_presionada=true

 console.log(es_presionada)
}, true)

div_cajita.addEventListener('mousedown', function(valor){
   es_presionada=false
   
   console.log(es_presionada)
  }, true)

  div_cajita.addEventListener('mousemove', function(valor){
   
   
   console.log('[mousemove]')
  }, true)