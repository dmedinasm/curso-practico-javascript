const lista1 = [
    100,
    200,
    300,
    500,
];




const calcularMediaAritmetica = (lista) => {
        //let sumalista = 0;
        //for (let i = 0; i < lista.length; i++){
         //sumalista = sumalista + lista[i];
    //}

    //La funcion reduce sustituye al ciclo for en este caso
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista /lista.length;

    return promedioLista;
}