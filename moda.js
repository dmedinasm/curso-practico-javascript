
const calcularModa = (lista) => {
 const listaCount = {};

 if (Array.isArray(lista)){
  lista.map(
    function(elemento){
    listaCount[elemento] ? listaCount[elemento] += 1 : listaCount[elemento] = 1;
    })
}else{
  [];
} 

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
       return elementoA[1] - elementoB[1];
    }
)
  //El metodo Object.entries devuelve un array con los valores de una lista de objetos
const moda = listaArray[listaArray.length - 1];

return moda;
}

