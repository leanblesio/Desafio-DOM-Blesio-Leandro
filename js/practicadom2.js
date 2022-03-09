console.log('Practica dom 2')

class producto{
    constructor(id, nombre, cantPorBulto)
    {
        this.id = id
        this.nombre = nombre
        this.cantPorBulto = cantPorBulto
    }
}

const enviar = document.getElementById('send')
enviar.onclick = e => {
    e.preventDefault()
    const arr = e.target.parentNode
    console.log(`id:  ${arr.children[0].value}`);
    console.log(`nombre:  ${arr.children[1].value}` );
    console.log(`cant x bulto:  ${arr.children[2].value}`);


}

const agregar = document.getElementById('add')
const arrProd = []
agregar.onclick = e =>{
    const Arreglo = e.target.parentNode
    let objProd = new producto()
    objProd.id = Arreglo.children[0].value
    objProd.nombre = Arreglo.children[1].value
    objProd.cantPorBulto = Arreglo.children[2].value
    arrProd.push(objProd)
    console.log(objProd)

    arrProd.forEach(e => {
            let li = document.createElement("li")
          //  li.innerHTML = arrProd
            li.innerHTML = objProd.id
            document.getElementById('listProd').append(li)
    });
    
}











