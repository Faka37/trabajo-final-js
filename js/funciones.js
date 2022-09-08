const creoCodigo = () => parseInt(Math.random() * 10000)

const agregandoProducto = () => {
    let nombre = prompt("ingrese nombre").toUpperCase()
    let marca = prompt("ingrese una marca").toUpperCase()
    let codigo = creoCodigo()
    let precio = Number(prompt("ingrese el precio"))
    let disponibilidad = confirm("ingrese si está disponible")
    let cantidad = 0
    if (disponibilidad) {
        cantidad = Number(prompt("ingrese la cantidad de stock"))
    }else { cantidad = 0}
    cantidad = cantidad 
    
    //OBJETO LITERAL
    let nuevoProducto = { nombre: nombre, marca: marca, codigo: codigo, precio: precio, disponibilidad: disponibilidad, cantidad: cantidad }
    productos.push(nuevoProducto)
    
    // METODOS
    
    let disponibles = productos.filter(producto => producto.disponibilidad === true)
    console.log(disponibles)
    let noDisponibles = productos.filter(producto => producto.disponibilidad === false)
    console.log(noDisponibles)
    let topeMil = productos.filter(producto => producto.precio <= 1000)
    console.log(topeMil)
}


// Para empezar y llegado al caso seguir agregando productos
let cargarProducto = confirm("¿Quiere cargar un nuevo producto?")

while (cargarProducto === true) {
    agregandoProducto()
    cargarProducto = confirm("¿Quiere cargar otro producto?")
}

// Para ordenar los precios 
function menorPrecio() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
}

function mayorPrecio() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return -1
        }
        if (a.precio < b.precio) {
            return 1
        }
        return 0
    })
}

//Busqueda en detalle 
function filtrar() {
    let parametro = prompt("Ingrese el nombre especifico de lo que busca: ").toUpperCase()
    let resultado = productos.filter((producto) => producto.nombre.includes(parametro))
    console.table(resultado)
}

// Mas de un resultado 
function busqueda() {
    let nomProd = prompt("Ingrese el nombre de lo que busca: ").toUpperCase()
    let resultado = productos.find((producto) => producto.nombre.includes(nomProd))
    if (resultado !== undefined) {
        console.table(resultado)
    } else {
        console.warn("No se encontró el producto buscado.")
    }
}
