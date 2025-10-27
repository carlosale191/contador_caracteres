const msg = "Caracteres: ";
const v2 = "/50"
const areaTexto = document.querySelector('textarea');
const caracteres = document.querySelector(".caracteres");

caracteres.textContent = msg + "0" + v2;

const contador = areaTexto.addEventListener('input', () => {
    caracteres.textContent = msg + areaTexto.value.length + v2;

    if (areaTexto.value.length > 50) {
        caracteres.style.color = "red";
        areaTexto.style.outlineColor = "red";
    } else if (areaTexto.value.length == 0) {
        caracteres.style.color = "black";
        areaTexto.style.outlineColor = "black";
    } else {
        caracteres.style.color = "green";
        areaTexto.style.outlineColor = "green";
    }

})

window.onload = function () {
    areaTexto.value = "";
}

contador();