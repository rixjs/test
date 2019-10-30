function cambiarTitulo1(){
document.getElementById("titulo").innerHTML = "Write multiple segments of code in the same document and minimize." 
}
function cambiarTitulo2(){
document.getElementById("titulo").innerHTML = "Fast and comfortable documentation thanks to the markdown." 
}
function cambiarTitulo3(){
document.getElementById("titulo").innerHTML = "Add and view your nested components." 
}
function cambiarTitulo4(){
document.getElementById("titulo").innerHTML = "Preview your work in different sizes according to your needs." 
}

var sub = "Dohnny gives you a new way to read and write your code, Instead of having regular files, the code is optimized to behave as a component where you can write the code in different segments inside the same file, and you can separate every component using a context, that gives you more control and organization in your project."
var lorem = sub.length

if (lorem > 20) {
  document.getElementById("subtitulo").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
 }
  