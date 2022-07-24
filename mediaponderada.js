const resultadosAsignaturas = [
    {
        materia: "matematicas",
        nota: 8.3,
        credito:3,
    },
    {
        materia: "espanol",
        nota:4.5,
        credito:4,
    },
    {
        materia:"historia",
        nota:7.4,
        credito:5,
    }

]

const calcularMediaPonderada = (lista) => {
const suma = (a, b) => a + b 

const multMediaCredito =
    lista.map(
    function(elemento){
        return elemento.nota * elemento.credito;
    }
)

const creditos = lista.map(
    function(elemento){
        return elemento.credito
    }
)

const mediaPonderada = (multMediaCredito.reduce(suma))/(creditos.reduce(suma));

return mediaPonderada
}

console.log(calcularMediaPonderada(resultadosAsignaturas));