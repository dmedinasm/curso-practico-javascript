const alturaIsosceles = (lado1, lado2, lado3) => {
    if (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado1 + lado3 <= lado2 ){
        return ("El triangulo no existe. Inserte nuevas medidas");
    } else if (lado1 === lado2){
        return Math.sqrt((lado1 ** 2) - (lado3 ** 2)/4 );
    } else if (lado1 === lado3){
        return Math.sqrt((lado1 ** 2) - (lado2 ** 2)/4 );
    } else if (lado2 === lado3){
        return Math.sqrt((lado2 ** 2) - (lado1 ** 2)/4 );
    } else{
        return ("El triangulo no es isosceles. Inserte nuevas medidas");
    }
}

const calcularAlturaIsosceles = () => {
    const lado1 = document.getElementById("InputLado1");
    const value1 = parseFloat(lado1.value);
    
    const lado2 = document.getElementById("InputLado2");
    const value2 = parseFloat(lado2.value);

    const lado3 = document.getElementById("InputLado3");
    const value3 = parseFloat(lado3.value);
    const altura = alturaIsosceles(value1, value2, value3);
    alert(altura);
}