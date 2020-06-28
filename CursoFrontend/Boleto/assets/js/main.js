// querySelector es para seleccionar un unico nodo
// querySelectorAll es para seleccionar varios nodos

// Lo que hacemos aqui es seleccionar todos los links y
// guardarlos en la lista con nombre links

// let links = document.querySelectorAll("a");

// Aqui recorremos la lista links e imprimimos cada enlace que 
// se encontro
// links.forEach(function(link){
// console.log(link);
// })


// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
// td.addEventListener("click",function(){
//     console.log(this);
// })
// });


let links = document.querySelectorAll("a");
links.forEach(function(link){
//Agrega un evento click 
link.addEventListener("click",function(ev){

//Quita los valores que tienen por defecto
//ev.preventDefault();
let content = document.querySelector(".content");

//Quitan las clases de animacion
content.classList.remove("animate__bounceInLeft");
content.classList.remove("animate__animated");

//Agrega las clases de animacion
content.classList.add("animate__fadeOutUp");
content.classList.add("animate__animated");

setTimeout(function(){
    //Es para movernos entre carpetas
    location.href = "/";
}, 600);

// location.href = "../index.html" 


return false;
});
});


