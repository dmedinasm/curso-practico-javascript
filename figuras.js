//Codigo del cuadrado
console.group("Cuadrados");// Agrupar mensajes en la consola
//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado ** 2;
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();//Poner siempre para agrupar los mensajes hasta el groupEnd 

/*Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
 "Los lados del triangulo miden: " 

 + ladoTriangulo1

 + "cm, " 

 +ladoTriangulo2

 + "cm, " 

 +baseTriangulo

 + "cm" 
);

const alturaTriangulo = 5.5;

console.log("Los altura del triangulo es de: " + alturaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura)/2;
} //Javascript en las operaciones matematicas siempre ejecuta
//lo qe esta dentro del parentesis

//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//Radio
//const radioCirculo = 4;

//console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro
function diametroCirculo (radio){
    return radio * 2;
} 

//console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

//PI
const PI =  Math.PI;
//console.log("La constante PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return (radio ** 2) * PI;
}

//console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}