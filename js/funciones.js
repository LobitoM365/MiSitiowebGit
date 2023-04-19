function cantidadProductosPlus(cantidadInt, cantidad, limite) {
    cantidadInt = parseFloat(cantidadInt);
    let contador = cantidadInt + 1;
    cantidad.innerHTML = contador;
    if (cantidadInt == limite) {
        cantidad.innerHTML = limite;
    };
}
function cantidadProductosMenos(cantidadInt, cantidad, limite) {
    cantidadInt = parseFloat(cantidadInt);
    let contador = cantidadInt - 1;
    cantidad.innerHTML = contador;
    if (cantidadInt <= limite) {
        cantidad.innerHTML = limite;
    };
}
function containVisibilidad(elementToAction) {
    document.getElementById(elementToAction);
    if (elementToAction.classList.contains("invisible")) {
        elementToAction.classList.remove("invisible")
    } else {
        elementToAction.classList.add("invisible")
    }
}