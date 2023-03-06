let bars =document.querySelector(".btn")
let nav = document.querySelector(".nav")


///add event to bars
function showNav(e){

this.classList.toggle('fa-xmark')
nav.classList.toggle("show")



}
bars.addEventListener('click' ,showNav)
