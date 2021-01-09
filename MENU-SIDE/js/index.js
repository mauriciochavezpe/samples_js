"use strict";
let btn = document.getElementById("btn-burger");
let burger = document.querySelector(".burger");
let box_menu = document.getElementsByClassName("box-menu-side")[0];
let flag = false;
btn.addEventListener("click", function() {
    if (!flag) {
        burger.classList.add("open");
        box_menu.classList.remove("menu-side-oculto");
        box_menu.classList.add("menu-side-visible");
        flag = true;
        return;
    }
    burger.classList.remove("open");
    box_menu.classList.remove("menu-side-visible");
    box_menu.classList.add("menu-side-oculto");
    flag = false;
    return;

})