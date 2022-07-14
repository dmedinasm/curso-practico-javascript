//const precioOriginal = 120;
//const descuento = 18;

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento;
}

const onClickButtonPriceDiscount = () => {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    coupons = [
        {
            name: "JuanDC_es_Batman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },
    ];

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon){
        alert(`El cupon ${couponValue} no es valido`)
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de:" + precioConDescuento ;
    }
}






//Forma de mostrar variables con console.log en un objeto
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/