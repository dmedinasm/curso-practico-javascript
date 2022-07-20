const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
       lista1Count[elemento] += 1;
    }else{
    lista1Count[elemento] = 1;
    }
}) 

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
       return elementoA[1] - elementoB[1];
    }
)  //El metodo Object.entries devuelve un array con los valores de una lista de objetos

const moda = lista1Array[lista1Array.length - 1];

console.log(moda);
