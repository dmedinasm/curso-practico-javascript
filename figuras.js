//Codigo del cuadrado
console.group("Cuadrados");// Agrupar mensajes en la consola
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;

console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();//Poner siempre para agrupar los mensajes hasta el groupEnd 

//Codigo del triangulo
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

console.log("Los altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; //Javascript en las operaciones matematicas siempre ejecuta
//lo qe esta dentro del parentesis

console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;

console.log("El radio del circulo es de: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de: " + diametroCirculo + "cm");

//PI
const PI =  Math.PI;
console.log("La constante PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

//Area
const areaCirculo = PI * (radioCirculo ** 2);

console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();