const agregandoProducto = () => {
    let nuevoNombre = prompt("ingrese nombre").toLocaleLowerCase()
    let nuevaMarca = prompt("ingrese una marca").toLocaleLowerCase()
    let nuevoCodigo = prompt("ingrese el  codigo")
    let nuevoPrecio = Number(prompt("ingrese el precio"))
    let nuevaDisponibilidad = confirm("ingrese si está disponible")


    let nuevoProducto = new Producto(nuevoNombre, nuevaMarca, nuevoCodigo, nuevoPrecio, nuevaDisponibilidad)

    productos.push(nuevoProducto)

}
let cargarProducto = confirm("¿Quiere cargar un nuevo producto?")

while (cargarProducto === true) {
    agregandoProducto()
    cargarProducto = confirm("¿Quiere cargar otro producto?")
}

function menorPrecio(){
    productos.sort((a, b) => {
        if (a.precio > b.precio){
            return 1
        }
        if (a.precio < b.precio){
            return -1
        }
        return 0 
    })
}

function mayorPrecio(){
    productos.sort((a, b) => {
        if (a.precio > b.precio){
            return -1
        }
        if (a.precio < b.precio){
            return 1
        }
        return 0 
    })
}



/* console.log("Productos nuevos")
console.table(productos) */