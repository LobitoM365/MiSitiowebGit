let menos = document.getElementById("menos");
let cantidad = document.getElementById("cantidad");
let mas = document.getElementById("mas");
let cantidadPago = document.getElementById("cantidadPago");
let total = document.getElementById("total");
let precio = 112350;
let eliminar = document.getElementById("eliminar");

mas.addEventListener("click", function () {
    cantidadProductosPlus(cantidad.innerHTML, cantidad, 20, precio, 0, total)
    let valorCantidad = cantidad.innerHTML;
    cantidadPago.innerHTML = valorCantidad;
});
menos.addEventListener("click", function () {
    cantidadProductosMenos(cantidad.innerHTML, cantidad, 0, precio, 0, total)
    let valorCantidad = cantidad.innerHTML;
    cantidadPago.innerHTML = valorCantidad;
});

eliminar.addEventListener("click", function () {
    cantidad.innerHTML = 0;
    total.innerHTML = "$" + 0;
    cantidadPago.innerHTML = 0;
})