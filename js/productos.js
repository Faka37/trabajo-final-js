const productos = []
const carrito = []

function listado() {

    productos.push(new Producto("ANTEOJO NEGRO", "MDQ", 1234, 2000, true, 10))
    productos.push(new Producto("ANTEOJO MARRON", "BRILLON", 1224, 2500, false, 0))
    productos.push(new Producto("ANTEOJO AZUL", "MDQ", 1232, 4000, false, 0))
    productos.push(new Producto("ANTEOJO AMARILLO", "BRILLON", 1244, 3600, false, 0))
    productos.push(new Producto("ANTEOJO VERDE", "MDQ", 1214, 5100, true, 1))
    productos.push(new Producto("ANTEOJO ROJO", "MDQ", 2234, 1000, false, 0))
    productos.push(new Producto("ANTEOJO VIOLETA", "BRILLON", 1243, 6300, true, 10))


}

function generarCarrito() {
    carrito.push(new Producto("ANTEOJO VERDE", "MDQ", 1214, 5100, true, 1))
    carrito.push(new Producto("ANTEOJO ROJO", "MDQ", 2234, 1000, false, 0))
    carrito.push(new Producto("ANTEOJO VIOLETA", "BRILLON", 1243, 6300, true, 10))
}

listado()
generarCarrito()