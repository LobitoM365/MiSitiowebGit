function cantidadProductosPlus(cantidadInt, cantidad, limite, precio, porcentajeDescuento, total) {
 /*    let valorUnitarioPeso = new Intl.NumberFormat().format(200000);
    console.log(valorUnitarioPeso) OTRA FORMA DE PONER EL PUNTO DE MIL A UN NUMERO ENTERO */
    cantidadInt = parseFloat(cantidadInt);
    let contador = cantidadInt + 1;
    cantidad.innerHTML = contador;

    if (cantidadInt == limite) {
        cantidad.innerHTML = limite;
        contador = limite;
    };
    porcentajeDescuento = porcentajeDescuento / 100;
    if (porcentajeDescuento == 0) {
        let precioTotal = precio * contador;
        total.innerHTML = "$" + precioTotal.toLocaleString("mx");
    } else {
        let Preciodescuento = precio * porcentajeDescuento;
        let precioTotal = Preciodescuento * contador;
        total.innerHTML = "$" + precioTotal.toLocaleString("mx");
    }
}
function cantidadProductosMenos(cantidadInt, cantidad, limite, precio, porcentajeDescuento, total) {
    cantidadInt = parseFloat(cantidadInt);
    let contador = cantidadInt - 1;
    cantidad.innerHTML = contador;
    if (cantidadInt <= limite) {
        cantidad.innerHTML = limite;
        contador = limite;
    };
    porcentajeDescuento = porcentajeDescuento / 100;
    if (porcentajeDescuento <= 0) {
        let precioTotal = precio * contador;
        total.innerHTML = "$" + precioTotal.toLocaleString("mx");
    } else {
        let Preciodescuento = precio * porcentajeDescuento;
        let precioTotal = Preciodescuento * contador;
        total.innerHTML = "$" + precioTotal.toLocaleString("mx");
    }
}
function containVisibilidad(elementToAction) {
    document.getElementById(elementToAction);
    if (elementToAction.classList.contains("invisible")) {
        elementToAction.classList.remove("invisible")
    } else {
        elementToAction.classList.add("invisible")
    }
}