const btnMenuOn = document.querySelector("#btnMenu");
const navMenu = document.querySelector("#menu");

btnMenuOn.addEventListener("click", function(){
    navMenu.classList.toggle("mostrar");
});