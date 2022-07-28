
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


const calcularModaInput = () =>{
  const input = document.getElementById("inputDatos");
  const value = JSON.parse ("[" + input.value + "]");// JSON.parse: Convierte cadena de numeros separados por coma en un array
  const calculoModa = calcularModa(value);
  alert(`Moda, Cantidad de Repeticiones: ${calculoModa}`);
}
