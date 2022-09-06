//filtros 
let disponibles = productos.filter(producto=>producto.disponibilidad===true)

let noDisponibles = productos.filter(producto=>producto.disponibilidad===false)

let topeMil = productos.filter(producto => producto.precio <= 1000)



