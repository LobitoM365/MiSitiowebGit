let menos = document.getElementById("menos");
let cantidad = document.getElementById("cantidad");
let mas = document.getElementById("mas");
let cantidadPago = document.getElementById("cantidadPago");
let total = document.getElementById("total");
let precio = 112350;
let eliminar = document.getElementById("eliminar");

mas.addEventListener("click", function () {
    cantidadProductosPlus(cantidad.innerHTML, cantidad, 20)
    let valorCantidad = cantidad.innerHTML;
    cantidadPago.innerHTML = valorCantidad;
    let valorTotal = precio * parseFloat(valorCantidad);
    total.innerHTML = "$" + valorTotal.toLocaleString("mx");
});
menos.addEventListener("click", function () {
    cantidadProductosMenos(cantidad.innerHTML, cantidad, 0)
    let valorCantidad = cantidad.innerHTML;
    cantidadPago.innerHTML = valorCantidad;
    let valorTotal = precio * parseFloat(valorCantidad);
    total.innerHTML = "$" + valorTotal.toLocaleString("mx");
});

eliminar.addEventListener("click", function () {
    cantidad.innerHTML = 0;
    total.innerHTML = "$" + 0;
    cantidadPago.innerHTML = 0;
})