var div_cajita= document.getElementById('cajita')

setTimeout(() => {
   div_cajita.style.left=(div_cajita.style.left + 10)+ 'px'
   console.log("Mensaje 1")
}, 2000);

setTimeout(() => {
   div_cajita.style.left=(div_cajita.style.left + 10)+ 'px'
   console.log("Mensaje 2")
}, 3000);