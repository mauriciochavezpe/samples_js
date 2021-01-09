function writing(texto=[]) {
    // texto=[];
    texto[0] = 'Mauricio chavez Pelayo'
    texto[1] = "\nDesarrollador FrontEnd";
    var arrFromStr = texto.join().split('');
    var i = 0;

    let box = document.querySelector(".box");
    let printStr = setInterval(function () {
        if (arrFromStr[i] === ' ') {
            box.innerText += arrFromStr[i];
            box.innerText += arrFromStr[i + 1];
            i += 2;

        } else {
            box.innerText += arrFromStr[i];
            i++;
        }
        
        if (i === arrFromStr.length) {

            clearInterval(printStr);

            var printStrRev = setInterval(function () {
                var cadena = texto.join().slice(0, i);
                box.innerText = cadena;
                // if(i)
                if (i == 0) {
                    clearInterval(printStrRev)
                    this.writing();
                }
                i--;
            }.bind(this), 250);
        }
    }.bind(this), 250); // 12
}
writing()