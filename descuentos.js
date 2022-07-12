//const precioOriginal = 120;
//const descuento = 18;

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento;
}







//Forma de mostrar variables con console.log en un objeto
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/