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

//AQUI INTERACTUAMOS CON EL  HTML

//Perimetro y area del cuadrado
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

//Perimetro y area del triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("InputLado2");
    const value2 = parseInt(input2.value);

    const input3 = document.getElementById("InputBase");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBase");
    const value1 = inputBase.value;

    const inputAltura = document.getElementById("InputAltura");
    const value2 = inputAltura.value;


    const area = areaTriangulo(value1, value2);
    alert(area);
}

//Perimetro y area del circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}