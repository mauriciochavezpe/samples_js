"use strict";
document.addEventListener('DOMContentLoaded',function(){
    console.log("CARGADO!");
 })

// //  document.getElementById("image")
let buttons =document.querySelectorAll("button");
 buttons.forEach(button => {
     button.addEventListener("click",function(e){
         document.getElementsByName("imagen")[0].classList.add("activo");
        document.imagen.src="resources/img_"+e.target.dataset.id+".jpg";
     })

 });
 