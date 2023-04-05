let list = document.querySelector("header__list")
let burger = document.querySelector(".header__block")

burger.onclick = function(){
    list.classList.toggle("open")
}