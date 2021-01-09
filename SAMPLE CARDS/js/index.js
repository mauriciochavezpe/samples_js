"use strict";
let theme = document.getElementById("switch-label");
let app = document.getElementById("app");
let parrafo = document.getElementById("parrafo");
let about = document.getElementById("about");
let cont_card = document.getElementsByClassName("contenedor-card")[0]
let github_svg = document.getElementById("github_svg");
let img_perfil = document.getElementById("img-perfil");

document.addEventListener('DOMContentLoaded', () => {
        console.log("CARGADO!");
    })
    // 30363d

theme.addEventListener("click", (oEvent) => {
        console.log(oEvent.target.checked)
        if (oEvent.target.checked) {
            app.style.backgroundColor = "#0d1117";
            cont_card.style.border = "1px solid #30363d";
            parrafo.style.color = "#ffffff";
            about.style.color = "#ffffff";
            github_svg.classList.add("github-svg-bg-white");
        } else {
            app.style.backgroundColor = "#f1f1f1";
            cont_card.style.border = "1px solid #c3c3c3";
            parrafo.style.color = "#000000";
            about.style.color = "#000000";
            github_svg.classList.remove("github-svg-bg-white");
        }

    })
    // img - perfil.addEventListener("hover")