
const lista1 = [
    100,
    200,
    50,
    700,
    500,
    400000000,
]

function ordenarLista(lista) {
const listaOrdered = lista.sort(
    (num1, num2) => {
        if(num1 === num2) {
        return 0; 
        }

        if(num1 < num2) {
        return -1;

        }else{
        return 1;
        }
})
    for(let i = 0; i < lista.length; i++){
        
    }
 return listaOrdered;
}


const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista /lista.length;
    
    return promedioLista;
    }

const esPar = (numerito) =>{
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularMediana(lista) {
let mediana;

const lista1 = ordenarLista(lista);
const mitadLista1 = parseInt(lista1.length / 2);

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElementos = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])
    mediana = promedioElementos;
}else{
    mediana = lista1[mitadLista1];
}

return mediana;
}

console.log(calcularMediana(lista1));