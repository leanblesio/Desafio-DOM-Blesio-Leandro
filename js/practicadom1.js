console.log('Practica DOM')

const materiales = [
    {id: 1, nombre: 'Pead'},
    {id: 2, nombre: 'Pet'},
    {id: 3, nombre: 'PP'},
    {id: 4, nombre: 'Pvc'},
]

materiales.forEach( (materiales) => {
    console.log(materiales.nombre)

    const nuevoMaterial = document.createElement('li')
    nuevoMaterial.innerText = materiales.nombre

    
} )
 
const pv = document.getElementById('mat')
pv.innerHTML = null;

materiales.forEach((materiales) => {
    console.log(materiales.nombre)

    const nuevoMaterial = document.createElement('li')
    nuevoMaterial.innerText = materiales.nombre

    pv.append(nuevoMaterial)
} )


let parrafo = document.createElement("p")
parrafo.innerHTML = "<h3>Envases, botellas, potes...</h3>"
document.body.append(parrafo)