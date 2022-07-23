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

const suma = (a, b) => a + b 

const multMediaCredito =
    resultadosAsignaturas.map(
    function(elemento){
        return elemento.nota * elemento.credito;
    }
)

const creditos = resultadosAsignaturas.map(
    function(elemento){
        return elemento.credito
    }
)

const mediaPonderada = (multMediaCredito.reduce(suma))/(creditos.reduce(suma));