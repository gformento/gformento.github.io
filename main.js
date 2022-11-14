
//Seleccionar los elementos HTML que necesito

var input = document.getElementById("tarea");
var boton = document.getElementById("btn");
var tareas = document.querySelector("ul");

//Cuando se haga click en el boton

boton.addEventListener("click",function(){

  //Obtener lo que hay escrito  en el <input>
  var tarea = input.value
  
  //Añadirlo como un nuevo elemento <li>

  var li = document.createElement("li")
  li.textContent = tarea
  tareas.appendChild(li)

})