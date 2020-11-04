// DOMContentLoaded
var objX = null;
var objY = null;
document.addEventListener('load', function () {
    objX = {
        count: 0,
        enabled: true
    };
    objY = {
        count: 0,
        enabled: true
    };
})
var signo = toolSelected(event); // X u O


var tictac = document.getElementsByClassName("tic-tac");

for (let i = 0; i < tictac.length; i++) {
    tictac[i].addEventListener('click', function (e) {
        var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        ids.map((id) => {
            if (id == +e.target.id) {
                addText(e.target, signo="X")
            }
        })

    })

}

// create X or Y for innerHTML 
function addText(target,text) {
    var target = document.getElementById(target.id);
    target.setAttribute("data-active","false");
    target.classList.add("writeTurn");
    target.innerHTML = text
}

function toolSelected(event) {
    let signo = event.target.children[0].innerText;
    if(signo=="X"){
        objX.count =+1;
        objX.enabled=false;
    }
    if(signo=="Y"){
        objY.count =+1;
        objY.enabled=false;
    }

    return event.target.children[0].innerText;
}

// tictac.addEventListener('click',function())
// document.addEventListener('click',function(e){

// })