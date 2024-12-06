function iniciarjuego() {
    let botonMacotasJugador = document.getElementById ("EleccionMascota")
    botonMacotasJugador.addEventListener ("click", seleccionjugador)
}

function seleccionjugador() {

    let inputodie = document.getElementById(odie)
    let inputsnoopy = document.getElementById(snoopy)
    let inputslinky = document.getElementById(slinky)
    
    if (inputodie.checked) {
        alert("seleccionaste odie")
    } else if(inputsnoopy.checked) 
        alert("seleccionaste snoopy")
    else if(inputslinky.checked) {
        alert("seleccionaste slinky")
    }

}

window.addEventListener ("load", iniciarjuego)

