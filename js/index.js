// DOMContentLoaded
var objX = null;
var objY = null;
var signo = null;
var arrSeleccion = null;
var txtTurno = document.getElementsByTagName("strong");
var count = null;
var victory = null;
document.addEventListener('DOMContentLoaded', function () {
    objX = {
        count: 0,
        habilitado: true
    };
    objY = {
        count: 0,
        habilitado: true
    };

})
function validarTurno(target) {
    if (signo == null || signo == undefined) signo = "X";

    txtTurno[0].innerHTML = `${signo}`;
    if (target.getAttribute("data-active")) {
        return;
    }
    else {
        count += 1;
        console.log(count);
        target.setAttribute("data-active", "false");
        target.classList.add("writeTurn");
        if (signo == "X" && objX.habilitado) {
            target.innerText = signo;
            objX.habilitado = false;
            objX.count += 1
            objY.habilitado = true;
            signo = "O"
            txtTurno[0].innerHTML = `${signo}`;
            return;
        }
        if (signo == "O" && objY.habilitado) {
            target.innerText = signo;
            objY.habilitado = false;
            objY.count += 1
            objX.habilitado = true;
            signo = "X";
            txtTurno[0].innerHTML = `${signo}`;
            return;
        }
    }
}

var tictac = document.getElementsByClassName("tic-tac");

for (let i = 0; i < tictac.length; i++) {
    tictac[i].addEventListener('click', function (e) {
        var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        ids.map((id) => {
            if (id == +e.target.id) { //match 

                validarTurno(e.target);

                arrSeleccion = [];
                var selector = +document.getElementById(e.target.id).getAttribute("id") // 1
                var valorSelector = document.getElementById(e.target.id).innerHTML

                if (objY.count >= 3 || objX.count >= 3) {
                    ids.map((id) => {
                        if (document.getElementById(id).getAttribute("data-active")) {
                            arrSeleccion.push(id);
                        }
                    })
                    buscarGanador(selector, valorSelector)
                    if(victory){
                        alert("ganaste");
                        resetTabla();
                        return;
                    }
                }


            }
           
        })

    })

}
function buscarGanador(path, valorSelector) {
    switch (path) {
        case 1:
            if ((arrSeleccion.includes(2) && arrSeleccion.includes(3)) &&
                document.getElementById("2").innerHTML == valorSelector &&
                valorSelector == document.getElementById("3").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(4) && arrSeleccion.includes(7)) &&
                document.getElementById("4").innerHTML == valorSelector &&
                valorSelector == document.getElementById("7").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(5) && arrSeleccion.includes(9)) &&
                document.getElementById("5").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
           
            break;
        case 2:
            if ((arrSeleccion.includes(1) && arrSeleccion.includes(3)) &&
                document.getElementById("1").innerHTML == valorSelector &&
                valorSelector == document.getElementById("3").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(5) && arrSeleccion.includes(8)) &&
                document.getElementById("5").innerHTML == valorSelector &&
                valorSelector == document.getElementById("8").innerHTML) {
                victory = true; return;
            }
          
            break;
        case 3:
            if ((arrSeleccion.includes(2) && arrSeleccion.includes(1)) &&
                document.getElementById("2").innerHTML == valorSelector &&
                valorSelector == document.getElementById("1").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(6) && arrSeleccion.includes(9)) &&
                document.getElementById("6").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(5) && arrSeleccion.includes(7)) &&
                document.getElementById("5").innerHTML == valorSelector &&
                valorSelector == document.getElementById("7").innerHTML) {
                victory = true; return;

            }
          
            break;
        case 4:
            if ((arrSeleccion.includes(1) && arrSeleccion.includes(7)) &&
                document.getElementById("1").innerHTML == valorSelector &&
                valorSelector == document.getElementById("7").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(5) && arrSeleccion.includes(6)) &&
                document.getElementById("5").innerHTML == valorSelector &&
                valorSelector == document.getElementById("6").innerHTML) {
                victory = true; return;

            }

           
            break;
        case 5:
            if ((arrSeleccion.includes(1) && arrSeleccion.includes(9)) &&
                document.getElementById("1").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(2) && arrSeleccion.includes(8)) &&
                document.getElementById("2").innerHTML == valorSelector &&
                valorSelector == document.getElementById("8").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(3) && arrSeleccion.includes(7)) &&
                document.getElementById("3").innerHTML == valorSelector &&
                valorSelector == document.getElementById("7").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(4) && arrSeleccion.includes(6)) &&
                document.getElementById("4").innerHTML == valorSelector &&
                valorSelector == document.getElementById("6").innerHTML) {
                victory = true; 

            }
            
            break;
        case 6:
            if ((arrSeleccion.includes(3) && arrSeleccion.includes(9)) &&
                document.getElementById("3").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(4) && arrSeleccion.includes(5)) &&
                document.getElementById("4").innerHTML == valorSelector &&
                valorSelector == document.getElementById("5").innerHTML) {
                victory = true; return;

            }

            
            break;
        case 7:
            if ((arrSeleccion.includes(1) && arrSeleccion.includes(4)) &&
                document.getElementById("1").innerHTML == valorSelector &&
                valorSelector == document.getElementById("4").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(3) && arrSeleccion.includes(5)) &&
                document.getElementById("3").innerHTML == valorSelector &&
                valorSelector == document.getElementById("5").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(8) && arrSeleccion.includes(9)) &&
                document.getElementById("8").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
         
            break;
        case 8:
            if ((arrSeleccion.includes(2) && arrSeleccion.includes(5)) &&
                document.getElementById("2").innerHTML == valorSelector &&
                valorSelector == document.getElementById("5").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(7) && arrSeleccion.includes(9)) &&
                document.getElementById("7").innerHTML == valorSelector &&
                valorSelector == document.getElementById("9").innerHTML) {
                victory = true; return;

            }
          
            break;
        default:
            if ((arrSeleccion.includes(1) && arrSeleccion.includes(5)) &&
                document.getElementById("1").innerHTML == valorSelector &&
                valorSelector == document.getElementById("5").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(3) && arrSeleccion.includes(6)) &&
                document.getElementById("3").innerHTML == valorSelector &&
                valorSelector == document.getElementById("6").innerHTML) {
                victory = true; return;

            }
            if ((arrSeleccion.includes(7) && arrSeleccion.includes(8)) &&
                document.getElementById("7").innerHTML == valorSelector &&
                valorSelector == document.getElementById("8").innerHTML) {
                victory = true;
                return;
            }

            break;
    }
}

function resetTabla() {
    var ticTac = document.getElementsByClassName("tic-tac")[0];
    for (var i = 1; i <= ticTac.children.length; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).removeAttribute("data-active");
    }
    objX.count = 0;
    objX.habilitado = true;

    objY.count = 0;
    objY.habilitado = true;
    victory = null
    arrSeleccion =[]
  
}

function toolSelected(event) {
    signo = event.target.children[0].innerText;
    console.log(signo);
    txtTurno[0].innerHTML = `${signo}`;
}